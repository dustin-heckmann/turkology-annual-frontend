import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/bootstrap.css';
import ResultsList from './components/ResultsList';
import SearchBar from "./components/SearchBar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      citations: [],
      query: ""
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch(`http://localhost:5050/citations?q=${this.state.query}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ citations: data.result })
      })
      .catch(console.log)
  }

  onSearchValueChange(query) {
    this.setState({query: query}, () =>
    {
      this.getData();
    });
  }

  render() {

    return (
      <div className="App">
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="container-fluid" style={{ padding: 0 }}>
                <div className="row no-gutters">
                  <div className="col align-right">
                    <div id="navi">include "navigation.html"</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="header" className="container-fluid">
                      <div className="row">
                        <div className="col">
                          <a href="http://www.asia-europe.uni-heidelberg.de">
                            <div id="cluster-logo"></div>
                          </a>
                        </div>
                      </div>

                      <div className="row" style={{ marginTop: '40px', paddingBottom: '10px' }}>
                        <div className="col text-left" id="header-left">
                          <a href="/">Turkology Annual Online</a>
                        </div>

                        <div className="col-xl-4 float-right">
                          <SearchBar
                            onSubmit={this.onSearchValueChange.bind(this)}
                          />

                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div id="middle" style={{ padding: 0 }}>
                      <div className="row">
                        <div className="col">
                          <h1>Title</h1>
                        </div>
                      </div>
                      <div id="content" className="container-fluid" style={{ padding: 0 }}>
                        <ResultsList citations={this.state.citations} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
