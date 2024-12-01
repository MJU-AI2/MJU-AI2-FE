import type { Problem } from '@/types/domain.types'
import {
  Card,
  RadioOption,
} from '@/features/problem/retrieveDetail/styles/problemdetail.styled'
import { Flex, Text, TextArea } from '@/styles'
import { ProblemMeta } from '@/features/problem/retrieveDetail/components/ProblemMeta'
import { ProblemContent } from '@/features/problem/retrieveDetail/components/ProblemContent'

interface ProblemSolveCardProps {
  problem: Problem
  selectedAnswer?: string
  onAnswerChange: (answer: string) => void
}

export function ProblemSolveCard({
  problem,
  selectedAnswer,
  onAnswerChange,
}: ProblemSolveCardProps) {
  const isMultipleChoice = problem.quizType === 'MULTIPLE_CHOICE'

  return (
    <Card>
      <Flex direction="column" gap={2}>
        <Text variant="h4">{problem.title}</Text>

        <ProblemMeta
          difficulty={problem.difficulty}
          quizType={problem.quizType}
          category={problem.category}
        />

        <ProblemContent content={problem.content} />

        {isMultipleChoice ? (
          <Flex direction="column" gap={0.5}>
            {problem.choices?.map((choice, index) => (
              <RadioOption key={index}>
                <input
                  type="radio"
                  name={`problem-${problem.id}`}
                  value={choice}
                  checked={selectedAnswer === choice}
                  onChange={(e) => onAnswerChange(e.target.value)}
                />
                <Text variant="body">{choice}</Text>
              </RadioOption>
            ))}
          </Flex>
        ) : (
          <Flex direction="column" gap={0.5}>
            <TextArea
              value={selectedAnswer || ''}
              onChange={(e) => onAnswerChange(e.target.value)}
              placeholder="답안을 입력하세요"
            />
          </Flex>
        )}
      </Flex>
    </Card>
  )
}
