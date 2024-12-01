import { Flex, Text } from '@/styles'

interface ProblemAnswerProps {
  answer: string
}

export function ProblemAnswer({ answer }: ProblemAnswerProps) {
  return (
    <Flex direction="column" gap={1}>
      <Text variant="h5">정답</Text>
      <Text variant="body">{answer}</Text>
    </Flex>
  )
}
