import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { problemsApi } from '@/services/ProblemsApi'

export const useCreateProblemSetMutation = () => {
  return useMutation({
    mutationFn: problemsApi.createSet,
    onSuccess: () => {
      toast.success('문제 집합이 생성되었습니다.')
    },
    onError: (error) => {
      toast.error('문제 집합 생성 중 오류가 발생했습니다.')
      console.error('Problem set creation failed:', error)
    },
  })
}
