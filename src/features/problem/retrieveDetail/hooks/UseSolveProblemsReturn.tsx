import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'

import type { Problem } from '@/types/domain.types'
import { problemsApi } from '@/services/problemsApi'
import { useProblemsQuery } from '@/features/problem/retrieve/hooks/useProblemsQuery'

interface UseSolveProblemsReturn {
  problems: Problem[] | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
  answers: Record<string, string>
  handleAnswerChange: (problemId: string, answer: string) => void
  handleSubmit: () => Promise<void>
  isSubmitting: boolean
}

export const useSolveProblems = (): UseSolveProblemsReturn => {
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const {
    data: problemsData,
    isLoading,
    isError,
    error,
  } = useProblemsQuery({ page: 0, size: 10 })

  const { mutateAsync: submitAnswers, isPending: isSubmitting } = useMutation({
    mutationFn: problemsApi.submit,
  })

  const handleAnswerChange = (problemId: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [problemId]: answer,
    }))
  }

  const handleSubmit = async () => {
    const submissionData = {
      answers: Object.entries(answers).map(([problemId, answer]) => ({
        problemId: Number(problemId),
        answer,
      })),
    }
    await submitAnswers(submissionData)
  }

  return {
    problems: problemsData?.content,
    isLoading,
    isError,
    error: error as Error | null,
    answers,
    handleAnswerChange,
    handleSubmit,
    isSubmitting,
  }
}
