import { Button, Flex, Text } from '@/styles'

interface ProblemHeaderProps {
  title: string
  onEdit: () => void
  onDelete: () => void
}

export function ProblemHeader({ title, onEdit, onDelete }: ProblemHeaderProps) {
  return (
    <Flex justify="between" align="center">
      <Text variant="h2">{title}</Text>
      <Flex gap={1}>
        <Button variant="primary" size="sm" onClick={onEdit}>
          수정
        </Button>
        <Button variant="third" size="sm" onClick={onDelete}>
          삭제
        </Button>
      </Flex>
    </Flex>
  )
}
