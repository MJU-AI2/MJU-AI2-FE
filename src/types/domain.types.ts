export type ProblemType = 'multiple_choice' | 'coding' | 'short_answer'
export type DifficultyType = 'EASY' | 'MEDIUM' | 'HARD'

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

export interface Problem {
  id: string
  title: string
  content: string
  description: string
  difficulty: DifficultyType
  targetGrade: number
  hints: string[]
  sampleAnswer: string
  createdAt: string
  qrCodeUrl?: string
  isPublic: boolean
}
