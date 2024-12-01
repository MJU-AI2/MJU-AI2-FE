import { Flex, Button } from '@/styles'
import type { PaginationProps } from '@/types/common.types'
import { usePagination } from '@/components/hooks/usePagination'

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const { pageNumbers } = usePagination(currentPage, totalPages)

  return (
    <Flex style={{ marginTop: '1rem' }} justify="center" gap={0.5}>
      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        이전
      </Button>
      {pageNumbers.map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'primary' : 'ghost'}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="ghost"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        다음
      </Button>
    </Flex>
  )
}
