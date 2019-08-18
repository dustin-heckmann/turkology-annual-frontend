import React, { Component } from "react";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Citations from "./citations/Citations";
import "./index.css";
import StatisticsPage from "./statistics/StatisticsPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citations: [],
      query: ""
    };
  }

  onSearchValueChange(query) {
    this.setState({ query: query }, () => {
      this.getData();
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Route component={Header} />
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/citations" component={Citations} />
            <Route path="/statistics" component={StatisticsPage} />
          </main>
        </Router>
      </div>
    );
  }
}
