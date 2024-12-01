import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUIZ_TYPE_OPTIONS,
} from '@/constants/problem'
import { Flex, Text } from '@/styles'
import { findLabelByValue } from '@/components/hooks/useFindLabel'

interface ProblemMetaProps {
  difficulty: string
  quizType: string
  category: string
}

export function ProblemMeta({
  difficulty,
  quizType,
  category,
}: ProblemMetaProps) {
  return (
    <Flex gap={1}>
      <Text variant="caption" color="textLight">
        난이도: {findLabelByValue(DIFFICULTY_OPTIONS, difficulty)}
      </Text>
      <Text variant="caption" color="textLight">
        |
      </Text>
      <Text variant="caption" color="textLight">
        유형: {findLabelByValue(QUIZ_TYPE_OPTIONS, quizType)}
      </Text>
      <Text variant="caption" color="textLight">
        |
      </Text>
      <Text variant="caption" color="textLight">
        카테고리: {findLabelByValue(CATEGORY_OPTIONS, category)}
      </Text>
    </Flex>
  )
}
