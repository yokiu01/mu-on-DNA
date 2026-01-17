/**
 * Dance DNA Types - Main Entry Point
 * 춤 DNA 테스트 TypeScript 모듈
 */

// Types
export type {
  DanceType,
  ScoreMap,
  FullScoreMap,
  Answer,
  Question,
  TypeInfo,
  QuizData,
  RecordedAnswer,
  RankedType,
  QuizResult,
  SavedData,
  Progress,
  TypeColors,
  TypeColorMap,
  TypeEmojiMap,
  QuizDOMElements,
  ResultDOMElements,
  KakaoShareOptions,
} from './types';

// Quiz Engine
export {
  QuizEngine,
  DANCE_TYPES,
  getQuizEngine,
  resetQuizEngine,
} from './quiz-engine';

// Quiz Data
export { quizData, getScoreBalance } from './quiz-data';
