import { Container, Flex, Button } from '@/styles'
import { ErrorFallback } from '@/components/ErrorFallback'
import { useSolveProblems } from '@/features/problem/retrieveDetail/hooks/UseSolveProblemsReturn'
import { ProblemSolveCard } from '@/features/problem/retrieveDetail/components/ProblemSolveCard'

export default function SolveProblemsPage() {
  const {
    problems,
    isLoading,
    isError,
    error,
    answers,
    handleAnswerChange,
    handleSubmit,
    isSubmitting,
  } = useSolveProblems()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError && error) return <ErrorFallback error={error} />
  if (!problems?.length) return null

  return (
    <Container padding={2}>
      <Flex direction="column" gap={3}>
        {problems.map((problem) => (
          <ProblemSolveCard
            key={problem.id}
            problem={problem}
            selectedAnswer={answers[problem.id]}
            onAnswerChange={(answer) => handleAnswerChange(problem.id, answer)}
          />
        ))}

        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
          fullWidth
        >
          {isSubmitting ? '제출 중...' : '답안 제출하기'}
        </Button>
      </Flex>
    </Container>
  )
}
