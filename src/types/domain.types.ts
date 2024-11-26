export type ProblemType = 'multiple_choice' | 'coding' | 'short_answer'
export type DifficultyType = '쉬움' | '보통' | '어려움'

export interface ProblemTypeOption {
  value: ProblemType
  label: string
}

export interface ProblemFormData {
  grade: number
  difficulty: DifficultyType
  topic: string
  type: ProblemType
  description: string
}
