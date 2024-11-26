import { Flex, Container } from '@/styles'
import { ProblemList } from '@/features/problem/retrieve/components/ProblemList'
import { useProblemsQuery } from '@/features/problem/retrieve/hooks/useProblemsQuery'
import { useDeleteProblemsMutation } from '@/features/problem/retrieve/hooks/useDeleteProblemsMutation'
import { useCreateProblemSetMutation } from '@/features/problem/retrieve/hooks/useCreateProblemSetMutation'
import { useProblemSelection } from '@/features/problem/retrieve/hooks/useProblemSelection'
import { ProblemListHeader } from '@/features/problem/retrieve/components/ProblemListHeader'

export const ProblemRetrieve = () => {
  const { data: problems, isLoading } = useProblemsQuery()
  const deleteProblemsMutation = useDeleteProblemsMutation()
  const createProblemSetMutation = useCreateProblemSetMutation()

  const {
    selectedProblems,
    setSelectedProblems,
    handleSelect,
    handleSelectAll,
    allSelected,
  } = useProblemSelection(problems)

  const handleDelete = () => {
    if (selectedProblems.length === 0) return
    deleteProblemsMutation.mutate(selectedProblems)
    setSelectedProblems([])
  }

  const handleCreateSet = () => {
    if (selectedProblems.length === 0) return
    createProblemSetMutation.mutate(selectedProblems)
    setSelectedProblems([])
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <Flex direction="column" gap={2}>
        <h1>문제 목록</h1>
        <ProblemListHeader
          allSelected={allSelected}
          selectedProblemsCount={selectedProblems.length}
          onSelectAll={handleSelectAll}
          onCreateSet={handleCreateSet}
          onDelete={handleDelete}
        />
        <ProblemList
          problems={problems || []}
          selectedProblems={selectedProblems}
          onSelect={handleSelect}
        />
      </Flex>
    </Container>
  )
}

export default ProblemRetrieve
