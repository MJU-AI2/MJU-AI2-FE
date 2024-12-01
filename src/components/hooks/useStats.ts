import { useQuery } from '@tanstack/react-query'

import type { StatisticsData } from '@/types/common.types'
import { DateUtils } from '@/utils/date'
import { getProblemsCount } from '@/services/problemsApi'

export const useStats = () => {
  return useQuery<StatisticsData>({
    queryKey: ['stats'],
    queryFn: async () => {
      return {
        studentCount: 123,
        lessonCount: await getProblemsCount(),
        lastUpdate: DateUtils.now(),
      }
    },
  })
}
