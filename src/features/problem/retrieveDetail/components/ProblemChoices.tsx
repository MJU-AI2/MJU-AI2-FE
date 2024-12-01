import { Flex, Text } from '@/styles'
import { ChoiceCard } from '@/features/problem/retrieveDetail/styles/problemdetail.styled'

interface ProblemChoicesProps {
  choices: string[]
}

export function ProblemChoices({ choices }: ProblemChoicesProps) {
  return (
    <Flex direction="column" gap={0.5}>
      <Text variant="h5">보기</Text>
      {choices.map((choice, index) => (
        <ChoiceCard key={index}>
          <Text variant="body">
            {index + 1}. {choice}
          </Text>
        </ChoiceCard>
      ))}
    </Flex>
  )
}
