import type { ApiResponse } from './axiosInstance'
import axiosInstance from './axiosInstance'

import type { Problem, ProblemFormData } from '@/types/domain.types'
import { DUMMY_PROBLEMS } from '@/features/problem/retrieve/mocks/dummyData'

export const problemsApi = {
  create: async (formData: ProblemFormData): Promise<Problem> => {
    const { data } = await axiosInstance.post<ApiResponse<Problem>>(
      '/api/problems',
      formData
    )
    return data.data
  },

  getAll: async (): Promise<Problem[]> => {
    return Promise.resolve(DUMMY_PROBLEMS)
    // const { data } =
    //   await axiosInstance.get<ApiResponse<Problem[]>>('/api/problems')
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
