import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  useEffect(() => {
    console.log(totalPages);
  });

  const pages = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === i}
            onClick={() => onPageChange(i)}
            aria-label="Previous"
          >
            {i}
          </button>
        </li>
      );
    }
    return items;
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">Previous</span>
          </button>
        </li>
        {pages()}
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
