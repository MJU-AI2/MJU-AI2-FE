import { Container, Flex } from '@/styles'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Card } from '@/features/problem/retrieveDetail/styles/problemdetail.styled'
import { ProblemHeader } from '@/features/problem/retrieveDetail/components/ProblemHeader'
import { ProblemMeta } from '@/features/problem/retrieveDetail/components/ProblemMeta'
import { ProblemContent } from '@/features/problem/retrieveDetail/components/ProblemContent'
import { ProblemChoices } from '@/features/problem/retrieveDetail/components/ProblemChoices'
import { ProblemAnswer } from '@/features/problem/retrieveDetail/components/ProblemAnswer'
import { useProblemDetail } from '@/features/problem/retrieveDetail/hooks/useProblemDetail'

export default function ProblemDetailPage() {
  const { problem, isLoading, isError, error, handleEdit, handleDelete } =
    useProblemDetail()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) return <ErrorFallback error={error as Error} />
  if (!problem) return null

  const isMultipleChoice = problem.quizType === 'MULTIPLE_CHOICE'

  return (
    <Container padding={2}>
      <Card>
        <Flex direction="column" gap={2}>
          <ProblemHeader
            title={problem.title}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <ProblemMeta
            difficulty={problem.difficulty}
            quizType={problem.quizType}
            category={problem.category}
          />
          <ProblemContent content={problem.content} />
          {isMultipleChoice && problem.choices && (
            <ProblemChoices choices={problem.choices} />
          )}
          <ProblemAnswer answer={problem.answer} />
        </Flex>
      </Card>
    </Container>
  )
}
