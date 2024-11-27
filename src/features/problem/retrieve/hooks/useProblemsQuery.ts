import { useQuery } from '@tanstack/react-query'

import { problemsApi } from '@/services/problemsApi'
import type { UseProblemsQueryParams } from '@/types/hooks.types'

export const PROBLEMS_QUERY_KEY = 'problems'

export const useProblemsQuery = ({ page, size }: UseProblemsQueryParams) => {
  return useQuery({
    queryKey: ['problems', page, size],
    queryFn: () => problemsApi.getAll({ page, size }),
  })
}
