import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

import { problemsApi } from '@/services/problemsApi'
import type { QuizResult } from '@/types/domain.types'
import type { SubmissionResult } from '@/types/hooks.types'

export const useSubmitAnswers = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutateAsync: submitAnswers, isPending: isSubmitting } = useMutation({
    mutationFn: problemsApi.submit,
    onSuccess: (data: SubmissionResult) => {
      const totalQuestions = data.results.length
      const correctAnswers = data.results.filter(
        (result) => result.result === 'SUCCESS'
      ).length

      const successRate = (correctAnswers / totalQuestions) * 100

      const quizResult: QuizResult = {
        successRate,
        totalQuestions,
        correctAnswers,
      }

      queryClient.setQueryData(['quizResult'], quizResult)

      toast.success('채점 완료!')
      navigate('/1/result')
    },
  })

  return {
    submitAnswers,
    isSubmitting,
  }
}
