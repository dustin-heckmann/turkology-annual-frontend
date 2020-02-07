import queryString from 'query-string'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAsync } from 'react-use'
import CitationSearchResult from './CitationSearchResult'
import { findCitations, ResultList } from '../citationService'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

const parseQueryParameters = (search: string) => {
  const params = queryString.parse(search)
  const page = parseInt(params.page as string) || 0
  const query = (params.query as string) ?? ''
  const volume = (params.volume as string) ?? ''
  const number = (params.number as string) ?? ''
  const keyword = (params.keyword as string) ?? ''

  return { page, query, volume, number, keyword }
}

const CitationSearch = () => {
  const { search } = useLocation()
  const history = useHistory()
  const queryParams = parseQueryParameters(search)
  const { page, query, volume, number, keyword } = queryParams

  const handleSearch = (values: Record<string, any>) => {
    const params = new URLSearchParams({
      ...queryParams,
      page: page.toString(),
      ...values
    })

    history.push({
      pathname: '/citations',
      search: `?${params}`
    })
  }

  const state = useAsync(async (): Promise<ResultList> => {
    return await findCitations(
      {
        fullText: query,
        keyword: keyword,
        volume: volume,
        number: number
      },
      page
    )
  }, [search])

  if (state.error) console.error(state.error.message)

  return (
    <section>
      <>
        {state.loading ? (
          <>Loading</>
        ) : !state.value ? (
          <> </>
        ) : (
          <>
            <BreadcrumbsItem to={'/citations'}>
              {query ? `Search: "${query}"` : 'Search'}
            </BreadcrumbsItem>
            <CitationSearchResult
              citations={state.value.result}
              page={page}
              query={query}
              total={state.value.total}
              pagesTotal={state.value.pagesTotal}
              offset={state.value.offset}
              handleUpdate={handleSearch}
            />
          </>
        )}
      </>
    </section>
  )
}

export default CitationSearch
