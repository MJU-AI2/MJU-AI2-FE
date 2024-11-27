import { useMutation } from '@tanstack/react-query'

import { problemsApi } from '@/services/problemsApi'

export const useCreateProblemSet = () => {
  return useMutation({
    mutationFn: problemsApi.createSet,
    onError: (error) => {
      console.error('Failed to create problem set:', error)
    },
  })
}
