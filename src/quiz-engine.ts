/**
 * Dance DNA Quiz Engine
 * 춤 DNA 유형 테스트의 핵심 로직을 담당하는 엔진
 */

import type {
  DanceType,
  ScoreMap,
  FullScoreMap,
  RecordedAnswer,
  RankedType,
  QuizResult,
  SavedData,
  Progress,
} from './types';

// 8가지 춤 DNA 유형
export const DANCE_TYPES: Record<string, DanceType> = {
  POWERFUL: 'powerful',
  PRECISE: 'precise',
  MINIMAL: 'minimal',
  EXPRESSER: 'expresser',
  TECHNICIAN: 'technician',
  CLASSICAL: 'classical',
  GROOVER: 'groover',
  SILHOUETTE: 'silhouette',
} as const;

// localStorage 키
const STORAGE_KEY = 'dance_dna_result';

export class QuizEngine {
  private scores: FullScoreMap;
  private answers: RecordedAnswer[];

  constructor() {
    this.scores = this.createEmptyScores();
    this.answers = [];
  }

  /**
   * 빈 점수 맵 생성
   */
  private createEmptyScores(): FullScoreMap {
    return {
      powerful: 0,
      precise: 0,
      minimal: 0,
      expresser: 0,
      technician: 0,
      classical: 0,
      groover: 0,
      silhouette: 0,
    };
  }

  /**
   * 점수 초기화 - 모든 유형의 점수를 0으로 설정
   */
  initScores(): void {
    this.scores = this.createEmptyScores();
    this.answers = [];
  }

  /**
   * 답변 기록 및 점수 계산
   */
  recordAnswer(
    questionId: number,
    answerIndex: number,
    answerScores: ScoreMap
  ): FullScoreMap {
    // 기존 답변이 있으면 해당 점수를 먼저 제거
    const existingAnswer = this.answers.find((a) => a.questionId === questionId);
    if (existingAnswer) {
      // 기존 점수 차감
      for (const [type, score] of Object.entries(existingAnswer.scores)) {
        const danceType = type as DanceType;
        if (this.scores[danceType] !== undefined && score !== undefined) {
          this.scores[danceType] -= score;
        }
      }
      // 기존 답변 제거
      this.answers = this.answers.filter((a) => a.questionId !== questionId);
    }

    // 새 답변 기록
    this.answers.push({
      questionId,
      answerIndex,
      scores: answerScores,
      timestamp: Date.now(),
    });

    // 점수 합산
    for (const [type, score] of Object.entries(answerScores)) {
      const danceType = type as DanceType;
      if (this.scores[danceType] !== undefined && score !== undefined) {
        this.scores[danceType] += score;
      }
    }

    return { ...this.scores };
  }

  /**
   * 특정 질문의 답변 취소
   */
  removeAnswer(questionId: number): FullScoreMap {
    const answer = this.answers.find((a) => a.questionId === questionId);
    if (answer) {
      // 점수 차감
      for (const [type, score] of Object.entries(answer.scores)) {
        const danceType = type as DanceType;
        if (this.scores[danceType] !== undefined && score !== undefined) {
          this.scores[danceType] -= score;
        }
      }
      // 답변 제거
      this.answers = this.answers.filter((a) => a.questionId !== questionId);
    }
    return { ...this.scores };
  }

  /**
   * 최종 결과 계산 (1위, 2위 유형 반환)
   */
  calculateResult(): QuizResult {
    // 점수를 배열로 변환하고 정렬
    const scoreEntries = Object.entries(this.scores) as [DanceType, number][];
    const sortedScores = scoreEntries.sort((a, b) => b[1] - a[1]);

    // 동점 처리: 동점인 경우 알파벳 순으로 정렬 (일관성 유지)
    const rankedTypes: RankedType[] = sortedScores.map(([type, score], index) => ({
      type,
      score,
      rank: index + 1,
    }));

    // 동점자 처리 - 같은 점수면 같은 순위 부여
    let currentRank = 1;
    for (let i = 0; i < rankedTypes.length; i++) {
      if (i > 0 && rankedTypes[i]!.score < rankedTypes[i - 1]!.score) {
        currentRank = i + 1;
      }
      rankedTypes[i]!.rank = currentRank;
    }

    const primary = sortedScores[0]?.[0] ?? null;
    const secondary = sortedScores[1]?.[0] ?? null;

    // 1위와 2위가 동점인 경우 표시
    const isTied =
      sortedScores[0] !== undefined &&
      sortedScores[1] !== undefined &&
      sortedScores[0][1] === sortedScores[1][1];

    return {
      primary,
      secondary,
      primaryScore: sortedScores[0]?.[1] ?? 0,
      secondaryScore: sortedScores[1]?.[1] ?? 0,
      scores: { ...this.scores },
      ranking: rankedTypes,
      isTied,
      totalQuestions: this.answers.length,
      timestamp: Date.now(),
    };
  }

  /**
   * 결과 저장 (localStorage)
   */
  saveResult(result: QuizResult): boolean {
    try {
      const dataToSave: SavedData = {
        result,
        answers: this.answers,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      return true;
    } catch (error) {
      console.error('Failed to save result to localStorage:', error);
      return false;
    }
  }

  /**
   * 결과 불러오기
   */
  loadResult(): QuizResult | null {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (!savedData) return null;

      const parsed = JSON.parse(savedData) as SavedData;

      // 저장된 답변으로 상태 복원
      if (parsed.answers && Array.isArray(parsed.answers)) {
        this.initScores();
        for (const answer of parsed.answers) {
          this.answers.push(answer);
          for (const [type, score] of Object.entries(answer.scores)) {
            const danceType = type as DanceType;
            if (this.scores[danceType] !== undefined && score !== undefined) {
              this.scores[danceType] += score;
            }
          }
        }
      }

      return parsed.result;
    } catch (error) {
      console.error('Failed to load result from localStorage:', error);
      return null;
    }
  }

  /**
   * 저장된 결과 삭제
   */
  clearResult(): boolean {
    try {
      localStorage.removeItem(STORAGE_KEY);
      this.initScores();
      return true;
    } catch (error) {
      console.error('Failed to clear result:', error);
      return false;
    }
  }

  /**
   * 공유 URL 생성
   */
  generateShareUrl(result: QuizResult): string {
    const baseUrl = window.location.origin + window.location.pathname;

    const params = new URLSearchParams();

    if (result.primary) {
      params.set('p', result.primary);
    }
    if (result.secondary) {
      params.set('s', result.secondary);
    }

    // 점수 정보 (압축된 형태로 저장)
    const scoresStr = Object.entries(result.scores)
      .map(
        ([type, score]) =>
          `${type.charAt(0)}${type.charAt(type.length - 1)}:${score}`
      )
      .join(',');
    params.set('sc', scoresStr);
    params.set('t', String(result.timestamp || Date.now()));

    return `${baseUrl}?${params.toString()}`;
  }

  /**
   * URL에서 결과 파싱
   */
  parseResultFromUrl(): QuizResult | null {
    try {
      const params = new URLSearchParams(window.location.search);

      const primary = params.get('p') as DanceType | null;
      const secondary = params.get('s') as DanceType | null;
      const scoresStr = params.get('sc');
      const timestamp = params.get('t');

      if (!primary) return null;

      // 점수 파싱
      const scores = this.createEmptyScores();
      if (scoresStr) {
        const scorePairs = scoresStr.split(',');
        for (const pair of scorePairs) {
          const [typeAbbrev, scoreStr] = pair.split(':');
          if (typeAbbrev && scoreStr) {
            const type = this.findTypeFromAbbrev(typeAbbrev);
            if (type) {
              scores[type] = parseInt(scoreStr, 10) || 0;
            }
          }
        }
      }

      // 랭킹 재구성
      const ranking: RankedType[] = (
        Object.entries(scores) as [DanceType, number][]
      )
        .sort((a, b) => b[1] - a[1])
        .map(([type, score], index) => ({
          type,
          score,
          rank: index + 1,
        }));

      return {
        primary,
        secondary,
        primaryScore: scores[primary] || 0,
        secondaryScore: secondary ? scores[secondary] || 0 : 0,
        scores,
        ranking,
        isTied: secondary ? scores[primary] === scores[secondary] : false,
        totalQuestions: 0,
        timestamp: timestamp ? parseInt(timestamp, 10) : Date.now(),
        isShared: true,
      };
    } catch (error) {
      console.error('Failed to parse result from URL:', error);
      return null;
    }
  }

  /**
   * 유형 약어에서 원래 유형명 찾기
   */
  private findTypeFromAbbrev(abbrev: string): DanceType | null {
    const typeMap: Record<string, DanceType> = {
      pl: 'powerful',
      pe: 'precise',
      ml: 'minimal',
      er: 'expresser',
      tn: 'technician',
      cl: 'classical',
      gr: 'groover',
      se: 'silhouette',
    };
    return typeMap[abbrev] ?? null;
  }

  /**
   * 현재 진행 상황 반환
   */
  getProgress(totalQuestions: number): Progress {
    const answered = this.answers.length;
    return {
      answered,
      total: totalQuestions,
      percentage:
        totalQuestions > 0 ? Math.round((answered / totalQuestions) * 100) : 0,
    };
  }

  /**
   * 특정 질문에 대한 답변 여부 확인
   */
  getAnswerForQuestion(questionId: number): number | null {
    const answer = this.answers.find((a) => a.questionId === questionId);
    return answer ? answer.answerIndex : null;
  }

  /**
   * 모든 답변 데이터 반환
   */
  getAllAnswers(): RecordedAnswer[] {
    return [...this.answers];
  }

  /**
   * 현재 점수 반환
   */
  getCurrentScores(): FullScoreMap {
    return { ...this.scores };
  }

  /**
   * 결과 유효성 검사
   */
  isResultValid(minQuestions = 1): boolean {
    return this.answers.length >= minQuestions;
  }

  /**
   * 디버그용: 현재 상태 출력
   */
  debugState(): void {
    console.log('=== QuizEngine State ===');
    console.log('Scores:', this.scores);
    console.log('Answers:', this.answers);
    console.log('Result:', this.calculateResult());
    console.log('========================');
  }
}

// 싱글톤 인스턴스 (필요시 사용)
let quizEngineInstance: QuizEngine | null = null;

export function getQuizEngine(): QuizEngine {
  if (!quizEngineInstance) {
    quizEngineInstance = new QuizEngine();
  }
  return quizEngineInstance;
}

export function resetQuizEngine(): QuizEngine {
  quizEngineInstance = new QuizEngine();
  return quizEngineInstance;
}

export default QuizEngine;
