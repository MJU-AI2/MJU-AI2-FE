import type { ApiResponse } from './axiosInstance'
import axiosInstance from './axiosInstance'

import type {
  PaginatedResponse,
  Problem,
  ProblemFormData,
} from '@/types/domain.types'
import type {
  SubmissionRequest,
  SubmissionResult,
  UseProblemsQueryParams,
} from '@/types/hooks.types'
import axiosBlob from '@/services/axiosBlobInstance'

export const problemsApi = {
  create: async (formData: ProblemFormData): Promise<Problem> => {
    const { data } = await axiosInstance.post<ApiResponse<Problem>>(
      '/api/v1/quiz/generate',
      formData
    )
    return data.data
  },

  get: async (problemId: string): Promise<Problem> => {
    const { data } = await axiosInstance.get<ApiResponse<Problem>>(
      `/api/v1/quiz/${problemId}`
    )
    return data.data
  },

  getAll: async ({
    page,
    size,
  }: UseProblemsQueryParams): Promise<PaginatedResponse> => {
    const { data } = await axiosInstance.get<ApiResponse<PaginatedResponse>>(
      'api/v1/quiz/all',
      {
        params: {
          size,
          page,
        },
      }
    )
    return data.data
  },

  deleteMany: async (problemIds: string[]): Promise<void> => {
    await axiosInstance.delete('/api/problems', {
      data: { problemIds },
    })
  },

  createSet: async (): Promise<Blob> => {
    const response = await axiosBlob.get('/api/v1/quiz/QR/1')
    return response.data
  },

  submit: async (submitData: SubmissionRequest): Promise<SubmissionResult> => {
    const { data } = await axiosInstance.post<ApiResponse<SubmissionResult>>(
      '/api/v1/quiz/answerSubmit',
      submitData
    )
    return data.data
  },
}

export const getProblemsCount = async (): Promise<number> => {
  const { data } = await axiosInstance.get<ApiResponse<number>>(
    '/api/v1/quiz/getQuizCount'
  )
  return data.data
}
