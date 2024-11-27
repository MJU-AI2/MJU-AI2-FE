import { Flex, Button } from '@/styles'

interface ProblemListHeaderProps {
  allSelected: boolean | undefined
  selectedProblemsCount: number
  selectedProblemIds: string[]
  onSelectAll: (selected: boolean) => void
  onCreateSet: () => void
  onDelete: () => void
}

export const ProblemListHeader = ({
  allSelected,
  selectedProblemsCount,
  onSelectAll,
  onCreateSet,
  onDelete,
}: ProblemListHeaderProps) => {
  return (
    <Flex justify="between" align="center" gap={1}>
      <Button
        variant="secondary"
        onClick={() => onSelectAll(!allSelected)}
        style={{ minWidth: '120px' }}
      >
        <Flex align="center" gap={0.5}>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={(e) => onSelectAll(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
          <span>전체 선택</span>
        </Flex>
      </Button>
      <Flex gap={1}>
        <Button
          variant="primary"
          disabled={selectedProblemsCount === 0}
          onClick={onCreateSet}
        >
          문제집 만들기
        </Button>
        <Button
          variant="third"
          disabled={selectedProblemsCount === 0}
          onClick={onDelete}
        >
          선택 삭제
        </Button>
      </Flex>
    </Flex>
  )
}
