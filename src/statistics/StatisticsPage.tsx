import React, { Component, ReactPropTypes } from 'react';
import { Route } from 'react-router-dom';
import { Statistics, fetchStatistics } from './statisticsService';
import CompletenessMonitor from './CompletenessMonitor';


interface State {
  statistics: Statistics
}

export default class StatisticsPage extends Component<ReactPropTypes, State> {
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = { statistics: { completeness: {} } };
  }

  componentDidMount() {
    this.loadStatistics();
  }

  componentDidUpdate() {

  }

  async loadStatistics() {
    const statistics = await fetchStatistics();
    this.setState({ statistics });
  }

  render() {
    if (!this.state.statistics) return <>Loading...</>;
    const { statistics: { completeness } } = this.state;
    return (
      <>
        <Route path="/statistics/completeness" component={() => <CompletenessMonitor completeness={completeness} />} />
      </>
    );
  }
}
