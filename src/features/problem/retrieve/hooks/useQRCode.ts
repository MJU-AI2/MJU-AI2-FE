import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { problemsApi } from '@/services/problemsApi'

export const useCreateProblemSet = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null)

  const mutation = useMutation({
    mutationFn: problemsApi.createSet,
    onSuccess: (blob) => {
      const url = URL.createObjectURL(blob)
      setQrCodeUrl(url)
    },
    onError: (error) => {
      console.error('Failed to create problem set:', error)
    },
  })

  // 컴포넌트가 언마운트될 때 URL 정리
  useEffect(() => {
    return () => {
      if (qrCodeUrl) {
        URL.revokeObjectURL(qrCodeUrl)
      }
    }
  }, [qrCodeUrl])

  return {
    createSet: mutation.mutate,
    qrCodeUrl,
    isLoading: mutation.isPending,
    error: mutation.error,
  }
}
