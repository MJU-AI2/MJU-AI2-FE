import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { problemsApi } from '@/services/problemsApi'
import { PROBLEMS_QUERY_KEY } from '@/features/problem/retrieve/hooks/useProblemsQuery'

export const useDeleteProblemsMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: problemsApi.deleteMany,
    onSuccess: () => {
      toast.success('선택한 문제들이 삭제되었습니다.')
      queryClient.invalidateQueries({ queryKey: [PROBLEMS_QUERY_KEY] })
    },
    onError: (error) => {
      toast.error('문제 삭제 중 오류가 발생했습니다.')
      console.error('Problems deletion failed:', error)
    },
  })
}
