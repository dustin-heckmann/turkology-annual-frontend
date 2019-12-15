import React from 'react'
import Citation from './citations/Citation'
import PaginationSelector from './citations/PaginationSelector'
import CitationList from './citations/CitationList'
import SearchHeader from './citations/SearchHeader'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

interface Props {
  page: number
  query: string
  total: number
  pagesTotal: number
  offset: number
  citations: Citation[]
  handleUpdate: Function
}

const CitationSearchResult = ({
  page,
  citations,
  total,
  pagesTotal,
  offset,
  handleUpdate
}: Props) => {
  return (
    <>
      <PaginationSelector
        pageCount={pagesTotal}
        currentPage={page}
        handleUpdate={(page: number) => {
          handleUpdate({ page })
        }}
      />
      <SearchHeader total={total} />
      <CitationList citations={citations} offset={offset} />
    </>
  )
}

export default CitationSearchResult
