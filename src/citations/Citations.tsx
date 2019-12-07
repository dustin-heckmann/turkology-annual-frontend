import React from 'react';
import { Route } from 'react-router-dom';

import CitationDetails from './CitationDetails';
import CitationSearch from './CitationSearch';

export default () => (
  <>
    <Route path="/citations/:citationId" component={CitationDetails} />
    <Route path="/citations" exact component={CitationSearch} />
  </>
);
