import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { problemsApi } from '@/services/problemsApi'

export const useCreateProblemSetMutation = () => {
  return useMutation({
    mutationFn: problemsApi.createSet,
    onSuccess: () => {
      toast.success('문제집이 생성되었습니다.')
    },
    onError: (error) => {
      toast.error('문제집 생성 중 오류가 발생했습니다.')
      console.error('Problem set creation failed:', error)
    },
  })
}
