import React from 'react'

import { Flex, Select, Text } from '@/styles'
import type { ProblemTypeOption } from '@/types/domain.types'

interface FormSelectProps<T extends string | number> {
  label: string
  name: string
  value: T
  options:
    | readonly T[]
    | Array<{ value: T; label: string }>
    | ProblemTypeOption[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export const FormSelect = <T extends string | number>({
  label,
  name,
  value,
  options,
  onChange,
}: FormSelectProps<T>) => (
  <Flex direction="column" gap={0.5}>
    <Text variant="h5">{label}</Text>
    <Select name={name} value={value} onChange={onChange}>
      {options.map((option) => {
        const optionValue = typeof option === 'object' ? option.value : option
        const optionLabel =
          typeof option === 'object' ? option.label : String(option)
        return (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        )
      })}
    </Select>
  </Flex>
)
