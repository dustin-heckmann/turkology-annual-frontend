import React from 'react'
import { Route } from 'react-router-dom'

import CitationDetails from './CitationDetails'
import CitationSearch from './CitationSearch'

const Citations = () => (
  <>
    <Route path="/citations/:citationId" component={CitationDetails} />

    <Route path="/citations" exact component={CitationSearch} />
  </>
)

export default Citations
