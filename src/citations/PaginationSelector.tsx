import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from './PaginationSelector.module.css'

interface Props {
  pageCount: number
  currentPage: number
  handleUpdate: Function
}
const PaginationSelector = ({
  pageCount,
  currentPage,
  handleUpdate
}: Props) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    handleUpdate(selected)
  }

  return (
    <ReactPaginate
      pageCount={pageCount}
      initialPage={currentPage}
      pageRangeDisplayed={6}
      marginPagesDisplayed={3}
      onPageChange={handlePageClick}
      disableInitialCallback
      containerClassName={styles.container}
      activeClassName={styles.active}
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
