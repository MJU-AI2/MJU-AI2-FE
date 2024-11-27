import { useState } from 'react'

import type { Problem } from '@/types/domain.types'

export const useProblemSelection = (problems: Problem[] | undefined) => {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([])

  const handleSelect = (id: string) => {
    setSelectedProblems((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    )
  }

  const handleSelectAll = (selected: boolean) => {
    if (!problems) return
    setSelectedProblems(selected ? problems.map((problem) => problem.id) : [])
  }

  const allSelected =
    problems &&
    problems.length === selectedProblems.length &&
    problems.length > 0

  return {
    selectedProblems,
    setSelectedProblems,
    handleSelect,
    handleSelectAll,
    allSelected,
  }
}
