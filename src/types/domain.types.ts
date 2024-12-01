import type {
  ALGORITHM_LANGUAGE_OPTIONS,
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUIZ_TYPE_OPTIONS,
  RESULT_TYPE_OPTIONS,
  TOPIC_OPTIONS,
} from '@/constants/problem'

export type Category = (typeof CATEGORY_OPTIONS)[number]['value']
export type Topic = (typeof TOPIC_OPTIONS)[number]['value']
export type AlgorithmLanguage =
  (typeof ALGORITHM_LANGUAGE_OPTIONS)[number]['value']
export type Difficulty = (typeof DIFFICULTY_OPTIONS)[number]['value']
export type QuizType = (typeof QUIZ_TYPE_OPTIONS)[number]['value']
export type ResultType = (typeof RESULT_TYPE_OPTIONS)[number]['value']

export interface ProblemTypeOption {
  value: string
  label: string
}

export interface ProblemFormData {
  category: Category
  topic: Topic | AlgorithmLanguage
  difficulty: Difficulty
  quizType: QuizType
}

export interface Problem {
  id: string
  title: string
  content: string
  answer: string
  category: Category
  difficulty: Difficulty
  quizType: QuizType
  choices: string[]
}

export interface PaginatedResponse {
  page: number
  size: number
  total: number
  content: Problem[]
}

export interface QuizResult {
  successRate: number
  totalQuestions: number
  correctAnswers: number
}
