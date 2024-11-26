import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { Flex, Container, Text } from '@/styles'
import { problemsApi } from '@/services/ProblemsApi'
import type { ProblemFormData } from '@/types/domain.types'
import { ProblemForm } from '@/features/problem/create/components/ProblemForm'

const INITIAL_FORM_DATA: ProblemFormData = {
  grade: 1,
  difficulty: '쉬움',
  topic: '',
  type: 'multiple_choice',
  description: '',
}

const ProblemCreate = () => {
  const [formData, setFormData] = useState<ProblemFormData>(INITIAL_FORM_DATA)

  const { mutate, isPending } = useMutation({
    mutationFn: problemsApi.create,
    onSuccess: () => {
      toast.success('문제가 성공적으로 생성되었습니다.')
    },
    onError: (error) => {
      toast.error('문제 생성 중 오류가 발생했습니다.')
      console.error('Problem creation failed:', error)
    },
  })

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
    setFormData((prev: any) => ({ ...prev, [name]: value }))
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
