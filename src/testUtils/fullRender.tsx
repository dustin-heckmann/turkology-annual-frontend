import { render } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import React, { ReactNode } from 'react'
import { Router } from 'react-router-dom'
import { ThroughProvider } from 'react-through'

const fullRender = (
  component: ReactNode,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  }: { route?: string; history?: MemoryHistory } = {}
) => {
  return {
    history,
    ...render(
      <ThroughProvider>
        <Router history={history}>{component}</Router>
      </ThroughProvider>
    )
  }
}

export default fullRender
