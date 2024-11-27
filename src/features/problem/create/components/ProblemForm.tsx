import React from 'react'

import { FormSelect } from './FormSelect'

import { Text, Flex, Button, Input, TextArea } from '@/styles'
import type { ProblemFormData } from '@/types/domain.types'
import {
  GRADE_OPTIONS,
  DIFFICULTY_OPTIONS,
  PROBLEM_TYPE_OPTIONS,
} from '@/constants/problem'

interface ProblemFormProps {
  formData: ProblemFormData
  isPending: boolean
  onSubmit: (e: React.FormEvent) => void
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}

export const ProblemForm = ({
  formData,
  isPending,
  onSubmit,
  onChange,
}: ProblemFormProps) => (
  <form onSubmit={onSubmit}>
    <Flex direction="column" gap={1.5}>
      <FormSelect
        label="학년"
        name="grade"
        value={formData.grade}
        options={GRADE_OPTIONS}
        onChange={onChange}
      />

      <FormSelect
        label="난이도"
        name="difficulty"
        value={formData.difficulty}
        options={DIFFICULTY_OPTIONS}
        onChange={onChange}
      />

      <Flex direction="column" gap={0.5}>
        <Text variant="h5">주제</Text>
        <Input
          type="text"
          name="topic"
          value={formData.topic}
          onChange={onChange}
          placeholder="예시: 변수, 반복문, 함수"
        />
      </Flex>

      <FormSelect
        label="문제 형식"
        name="type"
        value={formData.type}
        options={PROBLEM_TYPE_OPTIONS}
        onChange={onChange}
      />

      <Flex direction="column" gap={0.5}>
        <Text variant="h5">추가 설명</Text>
        <TextArea
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="문제에 대한 구체적인 요구사항이나 맥락을 입력하세요..."
        />
      </Flex>

      <Button type="submit" disabled={isPending} size="lg" fullWidth>
        {isPending ? '문제 생성 중...' : '문제 생성하기'}
      </Button>
    </Flex>
  </form>
)
