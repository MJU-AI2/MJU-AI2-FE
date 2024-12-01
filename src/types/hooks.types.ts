import type { ResultType } from '@/types/domain.types'

export interface UseProblemsQueryParams {
  page: number
  size: number
}

export interface SubmissionAnswer {
  quizID: string
  submitAnswer: string
}

export interface SubmissionRequest {
  answers: SubmissionAnswer[]
}

export interface Result {
  quizID: string
  answer: string
  result: ResultType
}

export interface SubmissionResult {
  results: Result[]
}
