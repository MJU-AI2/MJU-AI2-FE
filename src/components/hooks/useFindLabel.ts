import type { ProblemTypeOption } from '@/types/domain.types'

export const findLabelByValue = (
  options: ProblemTypeOption[],
  value: string
) => {
  return options.find((option) => option.value === value)?.label || value
}
