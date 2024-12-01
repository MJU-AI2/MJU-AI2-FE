import { Button, Container, Flex, Text } from '@/styles'

interface ErrorFallbackProps {
  error: Error
}

export function ErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <Container>
      <Flex direction="column" align="center" gap={2}>
        <Text variant="h2" color="accent">
          문제가 발생했습니다
        </Text>
        <Text variant="body" color="textLight">
          {error.message}
        </Text>
        <Button onClick={() => window.location.reload()}>새로고침</Button>
      </Flex>
    </Container>
  )
}
