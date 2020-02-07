import '@testing-library/jest-dom/extend-expect'
import { waitForDomChange } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import 'jest'
import React from 'react'
import CitationSearch from './CitationSearch'
import { findCitations, ResultList } from '../citationService'
import fullRender from '../../testUtils/fullRender'
jest.mock('../citationService')

const makeResultsList = ({
  length = 20,
  total = 50,
  currentPage = 0,
  pageSize = 20
}: {
  length?: number
  total?: number
  currentPage?: number
  pageSize?: number
}): ResultList => {
  const offset = pageSize * currentPage
  return {
    total,
    pagesTotal: Math.ceil(total / pageSize),
    currentPage,
    offset,
    result: range(length).map(index => {
      index += pageSize * currentPage
      return {
        id: index.toString(),
        volume: index % 26,
        number: index + offset + 1,
        title: `Title ${index}`,
        rawText: `Raw text ${index}`,
        keywords: []
      }
    })
  }
}

describe('CitationSearch', () => {
  it('displays results', async () => {
    ;(findCitations as jest.Mock).mockResolvedValue(
      makeResultsList({ total: 1, length: 1 })
    )

    const { getByText } = fullRender(<CitationSearch />)
    await waitForDomChange()
    expect(getByText('Title 0')).toBeInTheDocument()
  })

  it('changes to next page', async () => {
    const pagination = { total: 20, length: 10, pageSize: 10 }
    const page1 = makeResultsList(pagination)
    const page2 = makeResultsList({ ...pagination, currentPage: 1 })
    ;(findCitations as jest.Mock)
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const history = createMemoryHistory()
    const { getByText, queryByText } = fullRender(<CitationSearch />, {
      history
    })
    await waitForDomChange()

    userEvent.click(getByText('>'))
    expect(history.entries[1]).toMatchObject({
      pathname: '/citations',
      search: expect.stringContaining('page=1')
    })
    await waitForDomChange()
    expect(queryByText('Title 0')).not.toBeInTheDocument()
    expect(getByText('Title 10')).toBeInTheDocument()
  })

  it('keeps existing query parameter', async () => {
    ;(findCitations as jest.Mock).mockResolvedValue(
      makeResultsList({ total: 100, length: 10, pageSize: 10 })
    )
    const history = createMemoryHistory()
    const { getByText } = fullRender(<CitationSearch />, {
      history
    })
    history.push('/citations?query=abc')
    await waitForDomChange()
    userEvent.click(getByText('>'))
    await waitForDomChange()
    expect(history.entries[2].search).toContain('query=abc')
  })
})

const range = (length: number) => Array.from(Array(length).keys())
