import type { ApiResponse } from './axiosInstance'
import axiosInstance from './axiosInstance'

import type {
  PaginatedResponse,
  Problem,
  ProblemFormData,
} from '@/types/domain.types'
import { DUMMY_PROBLEMS } from '@/features/problem/retrieve/mocks/dummyData'
import type { UseProblemsQueryParams } from '@/types/hooks.types'

export const problemsApi = {
  create: async (formData: ProblemFormData): Promise<Problem> => {
    const { data } = await axiosInstance.post<ApiResponse<Problem>>(
      '/api/v1/quiz/generate',
      formData
    )
    return data.data
  },

  getAll: async ({
    page,
    size,
  }: UseProblemsQueryParams): Promise<PaginatedResponse> => {
    console.log(page, size)
    return Promise.resolve(DUMMY_PROBLEMS)
    // const { data } = await axiosInstance.get<ApiResponse<PaginatedResponse>>(
    //   'api/v1/quiz/all',
    //   {
    //     params: {
    //       size,
    //       page,
    //     },
    //   }
    // )
    // return data.data
  },

  deleteMany: async (problemIds: string[]): Promise<void> => {
    await axiosInstance.delete('/api/problems', {
      data: { problemIds },
    })
  },

  createSet: async (problemIds: string[]): Promise<string> => {
    const { data } = await axiosInstance.post<ApiResponse<string>>(
      '/api/problems/set',
      problemIds
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
