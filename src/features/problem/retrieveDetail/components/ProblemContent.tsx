import { CodeBlock } from '@/features/problem/retrieveDetail/styles/problemdetail.styled'
import { Text } from '@/styles'

interface ProblemContentProps {
  content: string
}

export function ProblemContent({ content }: ProblemContentProps) {
  const formatContent = (content: string) => {
    const parts = content.split('```')
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <CodeBlock key={index}>{part}</CodeBlock>
      }
      return (
        <Text key={index} variant="body">
          {part}
        </Text>
      )
    })
  }

  return <div>{formatContent(content)}</div>
}
