export const usePagination = (currentPage: number, totalPages: number) => {
  const getPageNumbers = () => {
    const pageNumbers = []
    let start = Math.max(1, currentPage - 4)
    let end = Math.min(totalPages, start + 9)

    if (end - start < 9) {
      start = Math.max(1, end - 9)
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i)
    }

    return pageNumbers
  }

  return {
    pageNumbers: getPageNumbers(),
  }
}
