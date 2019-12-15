import 'delayed-scroll-restoration-polyfill'
import 'normalize.css'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css'
import Citations from './citations/Citations'
import Header from './components/Header'
import './index.css'
import StatisticsPage from './statistics/StatisticsPage'
import { ThroughProvider } from 'react-through'

const App = () => (
  <ThroughProvider>
    <div className="App">
      <Router>
        <Route component={Header} />
        <main>
          <Route path="/" exact render={() => <Redirect to="/citations" />} />
          <Route path="/citations" component={Citations} />
          <Route path="/statistics" component={StatisticsPage} />
        </main>
      </Router>
    </div>
  </ThroughProvider>
)

export default App
