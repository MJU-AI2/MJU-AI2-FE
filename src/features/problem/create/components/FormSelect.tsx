import React from 'react'

import { Flex, Select, Text } from '@/styles'

interface FormSelectProps<T extends string | number> {
  label: string
  name: string
  value: T
  options: Array<{ value: T; label: string }>
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
}

export const FormSelect = <T extends string | number>({
  label,
  name,
  value,
  options,
  onChange,
  disabled = false,
}: FormSelectProps<T>) => (
  <Flex direction="column" gap={0.5}>
    <Text variant="h5">{label}</Text>
    <Select name={name} value={value} onChange={onChange} disabled={disabled}>
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
