import React, { Component } from 'react'
import 'normalize.css'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Citations from './citations/Citations'
import './index.css'
import StatisticsPage from './statistics/StatisticsPage'
import 'delayed-scroll-restoration-polyfill'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      citations: [],
      query: ''
    }
  }

  onSearchValueChange(query) {
    this.setState({ query: query }, () => {
      this.getData()
    })
  }

  render() {
    return (
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
    )
  }
}
