/**
 * Dance DNA Types
 * 춤 DNA 테스트의 타입 정의
 */

// 8가지 춤 DNA 유형
export type DanceType =
  | 'powerful'
  | 'precise'
  | 'minimal'
  | 'expresser'
  | 'technician'
  | 'classical'
  | 'groover'
  | 'silhouette';

// 유형별 점수 매핑
export type ScoreMap = Partial<Record<DanceType, number>>;

// 전체 점수 (모든 유형)
export type FullScoreMap = Record<DanceType, number>;

// 답변 구조
export interface Answer {
  text: string;
  scores: ScoreMap;
}

// 질문 구조
export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

// 유형 정보
export interface TypeInfo {
  name: string;
  englishName: string;
  emoji: string;
  nickname: string;
  description: string;
  traits: string[];
  advice: string;
  color: string;
}

// 퀴즈 데이터 구조
export interface QuizData {
  questions: Question[];
  types: Record<DanceType, TypeInfo>;
  typeKeys: DanceType[];
}

// 기록된 답변
export interface RecordedAnswer {
  questionId: number;
  answerIndex: number;
  scores: ScoreMap;
  timestamp: number;
}

// 랭킹된 유형
export interface RankedType {
  type: DanceType;
  score: number;
  rank: number;
}

// 최종 결과
export interface QuizResult {
  primary: DanceType | null;
  secondary: DanceType | null;
  primaryScore: number;
  secondaryScore: number;
  scores: FullScoreMap;
  ranking: RankedType[];
  isTied: boolean;
  totalQuestions: number;
  timestamp: number;
  isShared?: boolean;
}

// 저장된 데이터 구조
export interface SavedData {
  result: QuizResult;
  answers: RecordedAnswer[];
  savedAt: string;
}

// 진행 상황
export interface Progress {
  answered: number;
  total: number;
  percentage: number;
}

// 유형 색상 정보
export interface TypeColors {
  main: string;
  light: string;
}

// 유형별 색상 매핑
export type TypeColorMap = Record<DanceType, TypeColors>;

// 유형별 이모지 매핑
export type TypeEmojiMap = Record<DanceType, string>;

// DOM 요소 ID 매핑 (Quiz UI)
export interface QuizDOMElements {
  introScreen: HTMLElement | null;
  startQuizBtn: HTMLButtonElement | null;
  quizContainer: HTMLElement | null;
  questionWrapper: HTMLElement | null;
  progressBar: HTMLElement | null;
  progressText: HTMLElement | null;
  progressEmoji: HTMLElement | null;
  backBtn: HTMLButtonElement | null;
  closeBtn: HTMLButtonElement | null;
  exitModal: HTMLElement | null;
  exitModalClose: HTMLButtonElement | null;
  continueTestBtn: HTMLButtonElement | null;
  exitTestBtn: HTMLButtonElement | null;
}

// DOM 요소 ID 매핑 (Result UI)
export interface ResultDOMElements {
  loadingScreen: HTMLElement | null;
  resultContainer: HTMLElement | null;
  mainTypeCard: HTMLElement | null;
  typeBadge: HTMLElement | null;
  typeEmoji: HTMLElement | null;
  typeName: HTMLElement | null;
  typeEnglish: HTMLElement | null;
  typeNickname: HTMLElement | null;
  typeDescription: HTMLElement | null;
  traitsList: HTMLElement | null;
  adviceText: HTMLElement | null;
  secondaryEmoji: HTMLElement | null;
  secondaryName: HTMLElement | null;
  secondaryTag: HTMLElement | null;
  scoreBars: HTMLElement | null;
  storyType: HTMLElement | null;
  storyPreview: HTMLElement | null;
  shareBtn: HTMLButtonElement | null;
  retryBtn: HTMLButtonElement | null;
  saveImageBtn: HTMLAnchorElement | null;
  shareModal: HTMLElement | null;
  shareModalClose: HTMLButtonElement | null;
  shareInstagram: HTMLButtonElement | null;
  shareTwitter: HTMLButtonElement | null;
  shareKakao: HTMLButtonElement | null;
  shareCopyLink: HTMLButtonElement | null;
  copyLinkSection: HTMLElement | null;
  copyLinkInput: HTMLInputElement | null;
  copyLinkBtn: HTMLButtonElement | null;
  toast: HTMLElement | null;
}

// Kakao SDK 타입 (외부 라이브러리)
declare global {
  interface Window {
    Kakao?: {
      isInitialized(): boolean;
      Share: {
        sendDefault(options: KakaoShareOptions): void;
      };
    };
  }
}

export interface KakaoShareOptions {
  objectType: 'feed';
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  };
  buttons?: Array<{
    title: string;
    link: {
      mobileWebUrl: string;
      webUrl: string;
    };
  }>;
}
