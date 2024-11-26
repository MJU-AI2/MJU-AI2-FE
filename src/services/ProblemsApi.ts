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
    problemIds.forEach((id) => {
      const index = DUMMY_PROBLEMS.findIndex((p) => p.id === id)
      if (index !== -1) {
        DUMMY_PROBLEMS.splice(index, 1)
      }
    })
    return Promise.resolve()
  },
  // deleteMany: async (problemIds: string[]): Promise<void> => {
  //   return Promise.resolve()
  //   await axiosInstance.delete('/api/problems', {
  //     data: { problemIds },
  //   })
  // },

  createSet: async (problemIds: string[]): Promise<void> => {
    console.log('Created problem set with problems:', problemIds)
    return Promise.resolve()
  },
  // createSet: async (problemIds: string[]): Promise<void> => {
  //   return Promise.resolve()
  //   await axiosInstance.post('/api/problems/set', {
  //     problemIds,
  //   })
  // },
}
