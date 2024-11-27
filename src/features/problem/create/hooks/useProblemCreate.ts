import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { problemsApi } from '@/services/problemsApi'

export const useCreateProblemMutation = () => {
  return useMutation({
    mutationFn: problemsApi.create,
    onSuccess: () => {
      toast.success('문제가 성공적으로 생성되었습니다.')
    },
    onError: (error) => {
      toast.error('문제 생성 중 오류가 발생했습니다.')
      console.error('Problem creation failed:', error)
    },
  })
}
