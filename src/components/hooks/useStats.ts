import { useQuery } from '@tanstack/react-query'

import type { StatisticsData } from '@/types/common.types'
import { DateUtils } from '@/utils/date'

export const useStats = () => {
  return useQuery<StatisticsData>({
    queryKey: ['stats'],
    queryFn: async () => {
      return {
        studentCount: 1234,
        lessonCount: 50,
        lastUpdate: DateUtils.now(),
      }
    },
  })
}
