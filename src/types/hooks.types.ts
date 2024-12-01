export interface UseProblemsQueryParams {
  page: number
  size: number
}

export interface SubmissionAnswer {
  problemId: number
  answer: string
}

export interface SubmissionRequest {
  answers: SubmissionAnswer[]
}
