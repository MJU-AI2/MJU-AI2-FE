import { useProblemsQuery } from '@/features/problem/retrieve/hooks/useProblemsQuery'
import { useAnswersState } from '@/features/problem/retrieveDetail/hooks/useAnswersState'
import { useSubmitAnswers } from '@/features/problem/retrieveDetail/hooks/useSubmitAnswers'
import { ErrorFallback } from '@/components/ErrorFallback'
import { Button, Container, Flex } from '@/styles'
import { ProblemSolveCard } from '@/features/problem/retrieveDetail/components/ProblemSolveCard'

export default function SolveProblemsPage() {
  const { answers, handleAnswerChange } = useAnswersState()
  const { submitAnswers, isSubmitting } = useSubmitAnswers()
  const {
    data: problemsData,
    isLoading,
    isError,
    error,
  } = useProblemsQuery({ page: 0, size: 10 })

  const handleSubmit = async () => {
    const submissionData = {
      answers: Object.entries(answers).map(([problemId, submitAnswer]) => ({
        quizID: problemId,
        submitAnswer,
      })),
    }
    await submitAnswers(submissionData)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError && error) return <ErrorFallback error={error} />
  if (!problemsData?.content.length) return null

  return (
    <Container padding={2}>
      <Flex direction="column" gap={3}>
        {problemsData.content.map((problem) => (
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
