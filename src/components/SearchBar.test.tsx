import { wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import 'jest'
import React from 'react'
import fullRender from '../testUtils/fullRender'
import SearchBar from './SearchBar'

jest.useFakeTimers()

describe('SearchBar', () => {
  it('serches', async () => {
    const history = createMemoryHistory()
    const { getByPlaceholderText } = fullRender(<SearchBar />, {
      history
    })
    const input = getByPlaceholderText('Search...')
    userEvent.type(input, 'Query')
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })
})
