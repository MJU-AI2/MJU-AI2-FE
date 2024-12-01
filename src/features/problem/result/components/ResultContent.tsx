import { Flex, Text } from '@/styles'
import {
  EmojiWrapper,
  ResultWrapper,
} from '@/features/problem/result/styles/quizResult.styled'
import {
  getEmoji,
  getMessage,
} from '@/features/problem/result/utils/resultMessage'
import { CircularProgress } from '@/features/problem/result/components/CircularProgress'

interface ResultContentProps {
  percentage: number
}

export const ResultContent = ({ percentage }: ResultContentProps) => {
  return (
    <ResultWrapper direction="column" align="center" gap={3}>
      <EmojiWrapper percentage={percentage}>
        {getEmoji(percentage)}
      </EmojiWrapper>

      <CircularProgress percentage={percentage} />

      <Flex direction="column" align="center" gap={2}>
        <Text variant="h2" color={percentage <= 80 ? 'accent' : 'third'}>
          {percentage.toFixed(1)}% 맞았어요!
        </Text>

        <Text variant="h3" color="textLight">
          {getMessage(percentage)}
        </Text>
      </Flex>
    </ResultWrapper>
  )
}
