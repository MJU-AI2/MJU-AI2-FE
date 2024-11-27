import React, { useState } from 'react'

import { Flex, Container, Text } from '@/styles'
import type { ProblemFormData } from '@/types/domain.types'
import { ProblemForm } from '@/features/problem/create/components/ProblemForm'
import { useCreateProblemMutation } from '@/features/problem/create/hooks/useProblemCreate'

const INITIAL_FORM_DATA: ProblemFormData = {
  grade: 1,
  difficulty: 'EASY',
  topic: '',
  type: 'multiple_choice',
  description: '',
}

const ProblemCreate = () => {
  const [formData, setFormData] = useState<ProblemFormData>(INITIAL_FORM_DATA)

  const { mutate, isPending } = useCreateProblemMutation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutate(formData)
  }

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev: ProblemFormData) => ({ ...prev, [name]: value }))
  }

  return (
    <Container>
      <Flex direction="column" gap={2}>
        <Text variant="h1">문제 만들기</Text>
        <ProblemForm
          formData={formData}
          isPending={isPending}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
        />
      </Flex>
    </Container>
  )
}

export default ProblemCreate
