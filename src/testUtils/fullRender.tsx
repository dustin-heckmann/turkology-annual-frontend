import React, { ReactNode } from 'react'

import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
const fullRender = (
  component: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: { route?: string; history?: MemoryHistory } = {}
) => {
  return {
    history,
    ...render(<Router history={history}>{component}</Router>)
  }
}

export default fullRender
