import type { ProblemTypeOption } from '@/types/domain.types'

export const CATEGORY_OPTIONS: ProblemTypeOption[] = [
  { value: 'COMPUTER_SCIENCE_TERM', label: '컴퓨팅 용어' },
  { value: 'CODING_ALGORITHM', label: '프로그래밍 언어' },
]

export const TOPIC_OPTIONS: ProblemTypeOption[] = [
  { value: 'DATA_STRUCTURE', label: '자료구조' },
  { value: 'ALGORITHM', label: '알고리즘' },
  { value: 'OS', label: '운영체제' },
  { value: 'NETWORK', label: '네트워크' },
  { value: 'HARDWARE', label: '하드웨어' },
]

export const ALGORITHM_LANGUAGE_OPTIONS: ProblemTypeOption[] = [
  { value: 'JAVA', label: 'Java' },
  { value: 'PYTHON', label: 'Python' },
  { value: 'C', label: 'C' },
  { value: 'JAVASCRIPT', label: 'JavaScript' },
]

export const DIFFICULTY_OPTIONS: ProblemTypeOption[] = [
  { value: 'EASY', label: '쉬움' },
  { value: 'MEDIUM', label: '보통' },
  { value: 'HARD', label: '어려움' },
]

export const QUIZ_TYPE_OPTIONS: ProblemTypeOption[] = [
  { value: 'MULTIPLE_CHOICE', label: '객관식' },
  { value: 'SUBJECTIVE', label: '주관식' },
]
