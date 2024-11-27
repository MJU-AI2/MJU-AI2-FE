import { useQuery } from '@tanstack/react-query'

import { problemsApi } from '@/services/problemsApi'

export const PROBLEMS_QUERY_KEY = 'problems'

export const useProblemsQuery = () => {
  return useQuery({
    queryKey: [PROBLEMS_QUERY_KEY],
    queryFn: problemsApi.getAll,
  })
}