import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import type { Problem } from '@/types/domain.types'
import { problemsApi } from '@/services/problemsApi'

interface UseProblemDetailReturn {
  problem: Problem | undefined
  isLoading: boolean
  isError: boolean
  error: Error | null
  handleEdit: () => void
  handleDelete: () => void
}

export const useProblemDetail = (): UseProblemDetailReturn => {
  const { problemId = '' } = useParams()

  const {
    data: problem,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['problem', problemId],
    queryFn: () => problemsApi.get(problemId),
    enabled: !!problemId,
  })

  const handleEdit = () => {
    // 수정 로직
  }

  const handleDelete = () => {
    // 삭제 로직
  }

  return {
    problem,
    isLoading,
    isError,
    error: error as Error,
    handleEdit,
    handleDelete,
  }
}
