import ReactPaginate from 'react-paginate'
import React from 'react';

interface Props {
  pageCount: number
  currentPage: number
  onPageChange: Function
}
export default ({
  pageCount,
  currentPage,
  onPageChange
}: Props) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange(selected)
  }

  return <ReactPaginate
    pageCount={pageCount}
    initialPage={currentPage}
    pageRangeDisplayed={5}
    marginPagesDisplayed={3}
    onPageChange={handlePageClick}
    disableInitialCallback={true}
  />
}
