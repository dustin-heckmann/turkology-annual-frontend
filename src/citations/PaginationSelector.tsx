import ReactPaginate from 'react-paginate'
import React from 'react'

import styles from './PaginationSelector.module.css'

interface Props {
  pageCount: number
  currentPage: number
  onPageChange: Function
}
const PaginationSelector = ({
  pageCount,
  currentPage,
  onPageChange
}: Props) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange(selected)
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={currentPage}
      pageRangeDisplayed={5}
      marginPagesDisplayed={3}
      onPageChange={handlePageClick}
      disableInitialCallback
      containerClassName={styles.container}
      activeClassName={styles.activeLink}
      activeLinkClassName={styles.activeLink}
      pageLinkClassName={styles.pageLink}
      previousLinkClassName={styles.previousLink}
      nextLinkClassName={styles.nextLink}
      pageClassName={styles.page}
      previousClassName={styles.previous}
      nextClassName={styles.next}
      breakClassName={styles.break}
      breakLinkClassName={styles.breakLink}
      previousLabel="<"
      nextLabel=">"
    />
  )
}

export default PaginationSelector
