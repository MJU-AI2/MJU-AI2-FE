import { useQuery } from '@tanstack/react-query'

import { Text } from '@/styles'
import type { QuizResult } from '@/types/domain.types'
import {
  ResultCard,
  ResultContainer,
  TitleWrapper,
} from '@/features/problem/result/styles/quizResult.styled'
import { ResultContent } from '@/features/problem/result/components/ResultContent'

export const QuizResultPage = () => {
  const { data: resultData } = useQuery<QuizResult>({
    queryKey: ['quizResult'],
    enabled: false,
  })

  const percentage = resultData?.successRate ?? 0

  return (
    <ResultContainer direction="column" align="center" justify="center">
      <ResultCard>
        <TitleWrapper>
          <Text variant="h1" weight="bold">
            퀴즈 결과
          </Text>
        </TitleWrapper>
        <ResultContent percentage={percentage} />
      </ResultCard>
    </ResultContainer>
  )
}

export default QuizResultPage
