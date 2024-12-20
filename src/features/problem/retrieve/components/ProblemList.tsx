import { useNavigate } from 'react-router-dom'

import { Text } from '@/styles'
import type { Problem } from '@/types/domain.types'
import {
  ProblemContainer,
  ProblemContent,
  ProblemItem,
  ProblemTitle,
} from '@/features/problem/retrieve/stlyes/problemList.styled'
import { findLabelByValue } from '@/components/hooks/useFindLabel'
import { DIFFICULTY_OPTIONS, QUIZ_TYPE_OPTIONS } from '@/constants/problem'

interface ProblemListProps {
  problems: Problem[]
  selectedProblems: string[]
  onSelect: (id: string) => void
}

export const ProblemList = ({
  problems,
  selectedProblems,
  onSelect,
}: ProblemListProps) => {
  const navigate = useNavigate()

  return (
    <ProblemContainer>
      {problems.map((problem) => (
        <ProblemItem key={problem.id} onClick={() => onSelect(problem.id)}>
          <input
            type="checkbox"
            checked={selectedProblems.includes(problem.id)}
            onChange={() => onSelect(problem.id)}
            onClick={(e) => e.stopPropagation()}
          />
          <ProblemContent>
            <ProblemTitle
              variant="h5"
              onClick={() => navigate(`/problems/${problem.id}`)}
            >
              {problem.title}
            </ProblemTitle>
            <Text variant="caption" color="textLight">
              난이도: {findLabelByValue(DIFFICULTY_OPTIONS, problem.difficulty)}
            </Text>
            <Text variant="caption" color="textLight">
              문제 : {findLabelByValue(QUIZ_TYPE_OPTIONS, problem.quizType)}
            </Text>
          </ProblemContent>
        </ProblemItem>
      ))}
    </ProblemContainer>
  )
}
