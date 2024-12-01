import {
  CATEGORY_OPTIONS,
  DIFFICULTY_OPTIONS,
  QUIZ_TYPE_OPTIONS,
} from '@/constants/problem'
import { findLabelByValue } from '@/components/hooks/useFindLabel'
import {
  MetaContainer,
  MetaDivider,
  MetaItem,
} from '@/features/problem/retrieveDetail/styles/problemdetail.styled'

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
    <MetaContainer gap={1}>
      <MetaItem variant="caption" color="textLight" data-label="카테고리:">
        {findLabelByValue(CATEGORY_OPTIONS, category)}
      </MetaItem>
      <MetaDivider variant="caption" color="textLight">
        |
      </MetaDivider>
      <MetaItem variant="caption" color="textLight" data-label="유형:">
        {findLabelByValue(QUIZ_TYPE_OPTIONS, quizType)}
      </MetaItem>
      <MetaDivider variant="caption" color="textLight">
        |
      </MetaDivider>
      <MetaItem variant="caption" color="textLight" data-label="난이도:">
        {findLabelByValue(DIFFICULTY_OPTIONS, difficulty)}
      </MetaItem>
    </MetaContainer>
  )
}
