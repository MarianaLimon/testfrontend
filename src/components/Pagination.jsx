function Pagination({ currentPage, totalPages, onPageChange }) {

  const renderPages = () => {
    const pages = []

    const start = Math.max(currentPage - 2, 1)
    const end = Math.min(currentPage + 2, totalPages)

    if (start > 1) {
        pages.push(
            <button key={1} onClick={() => onPageChange(1)}>
            1
            </button>
        )

        if (start > 2) {
            pages.push(<span key="start-ellipsis">...</span>)
        }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="end-ellipsis">...</span>)
      }

      pages.push(
        <button key={totalPages} onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </button>
      )
    }

    return pages
  }

    return (
        <div className="pagination">
            <button
                className="arrow-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ‹
            </button>

            {renderPages()}

            <button
                className="arrow-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                ›
            </button>
        </div>
    )
}

export default Pagination
