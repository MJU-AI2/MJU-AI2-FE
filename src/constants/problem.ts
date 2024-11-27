import type { ProblemTypeOption } from '@/types/domain.types'

export const GRADE_OPTIONS = [1, 2, 3, 4, 5, 6]

export const PROBLEM_TYPE_OPTIONS: ProblemTypeOption[] = [
  { value: 'multiple_choice', label: '객관식' },
  { value: 'coding', label: '코딩 문제' },
  { value: 'short_answer', label: '주관식' },
]

export const DIFFICULTY_OPTIONS = ['EASY', 'MEDIUM', 'HARD'] as const
