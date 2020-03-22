import 'delayed-scroll-restoration-polyfill'
import 'normalize.css'
import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
import './App.css'
import Citations from './citations/Citations'
import Header from './header/Header'
import './index.css'
import { ThroughProvider } from 'react-through'
import About from './about/About'

const App = () => (
  <ThroughProvider>
    <div className="App">
      <Router>
        <Route component={Header} />
        <main>
          <Route path="/" exact render={() => <Redirect to="/about" />} />
          <Route path="/citations" component={Citations} />
          <Route path="/about" component={About} />
        </main>
      </Router>
    </div>
  </ThroughProvider>
)

export default App
