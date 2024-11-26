import type { ApiResponse } from './axiosInstance'
import axiosInstance from './axiosInstance'

import type { ProblemFormData } from '@/types/domain.types'

export const problemsApi = {
  create: async (formData: ProblemFormData): Promise<void> => {
    await axiosInstance.post<ApiResponse<void>>('/api/problems', formData)
  },
}
