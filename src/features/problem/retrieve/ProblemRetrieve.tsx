import { useState } from 'react'

import { Flex, Container } from '@/styles'
import { ProblemList } from '@/features/problem/retrieve/components/ProblemList'
import { useProblemsQuery } from '@/features/problem/retrieve/hooks/useProblemsQuery'
import { useDeleteProblemsMutation } from '@/features/problem/retrieve/hooks/useDeleteProblemsMutation'
import { useProblemSelection } from '@/features/problem/retrieve/hooks/useProblemSelection'
import { ProblemListHeader } from '@/features/problem/retrieve/components/ProblemListHeader'
import { QRCodeModal } from '@/features/problem/retrieve/components/QRCodeModal'
import { Pagination } from '@/components/ui/Pagination'
import { useCreateProblemSet } from '@/features/problem/retrieve/hooks/useQRCode'

const PAGE_SIZE = 10

export const ProblemRetrieve = () => {
  const [page, setPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { createSet, qrCodeUrl } = useCreateProblemSet()

  const { data: problemsData, isLoading } = useProblemsQuery({
    page,
    size: PAGE_SIZE,
  })

  const deleteProblemsMutation = useDeleteProblemsMutation()

  const {
    selectedProblems,
    setSelectedProblems,
    handleSelect,
    handleSelectAll,
    allSelected,
  } = useProblemSelection(problemsData?.content)

  const handleDelete = () => {
    if (selectedProblems.length === 0) return
    deleteProblemsMutation.mutate(selectedProblems)
    setSelectedProblems([])
  }

  const handleCreateSet = () => {
    if (selectedProblems.length === 0) return
    createSet()
    setIsModalOpen(true)
  }
  const handlePageChange = (newPage: number) => {
    setPage(newPage)
    setSelectedProblems([])
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const totalPages = Math.ceil((problemsData?.total || 0) / PAGE_SIZE)

  return (
    <Container>
      <Flex direction="column" gap={2}>
        <h1>문제 목록</h1>
        <ProblemListHeader
          allSelected={allSelected}
          selectedProblemsCount={selectedProblems.length}
          selectedProblemIds={selectedProblems}
          onSelectAll={handleSelectAll}
          onCreateSet={handleCreateSet}
          onDelete={handleDelete}
        />
        <ProblemList
          problems={problemsData?.content || []}
          selectedProblems={selectedProblems}
          onSelect={handleSelect}
        />
        <Flex justify={'evenly'}>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Flex>
        {qrCodeUrl && (
          <QRCodeModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            qrCodeUrl={qrCodeUrl}
          />
        )}
      </Flex>
    </Container>
  )
}
export default ProblemRetrieve
