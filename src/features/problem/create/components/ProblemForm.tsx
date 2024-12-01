import React from 'react'

import { FormSelect } from './FormSelect'

import { Flex, Button } from '@/styles'
import type { ProblemFormData } from '@/types/domain.types'
import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUIZ_TYPE_OPTIONS,
} from '@/constants/problem'
import { TopicOptionsManager } from '@/features/problem/create/components/TopicOptionsManager'
import { FormEventHandler } from '@/features/problem/create/components/FormEventHandler'

interface ProblemFormProps {
  formData: ProblemFormData
  isPending: boolean
  onSubmit: (e: React.FormEvent) => void
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const ProblemForm = ({
  formData,
  isPending,
  onSubmit,
  onChange,
}: ProblemFormProps) => {
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value
    const defaultTopic = TopicOptionsManager.getDefaultTopic(newCategory)

    onChange(e)
    onChange(FormEventHandler.createTopicChangeEvent(defaultTopic))
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap={1.5}>
        <FormSelect
          label="카테고리"
          name="category"
          value={formData.category}
          options={CATEGORY_OPTIONS}
          onChange={handleCategoryChange}
        />

        <FormSelect
          label="토픽"
          name="topic"
          value={formData.topic}
          options={TopicOptionsManager.getTopicOptions(formData.category)}
          onChange={onChange}
          disabled={!formData.category}
        />

        <FormSelect
          label="난이도"
          name="difficulty"
          value={formData.difficulty}
          options={DIFFICULTY_OPTIONS}
          onChange={onChange}
        />

        <FormSelect
          label="문제 형식"
          name="quizType"
          value={formData.quizType}
          options={QUIZ_TYPE_OPTIONS}
          onChange={onChange}
        />

        <Button type="submit" disabled={isPending} size="lg" fullWidth>
          {isPending ? '문제 생성 중...' : '문제 생성하기'}
        </Button>
      </Flex>
    </form>
  )
}
