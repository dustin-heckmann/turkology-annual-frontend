import React from 'react'
import { Route } from 'react-router-dom'
import { useAsync } from 'react-use'
import CompletenessMonitor from './CompletenessMonitor'
import { fetchStatistics, Statistics } from './statisticsService'

const StatisticsPage = () => {
  const state = useAsync(async (): Promise<Statistics> => {
    return await fetchStatistics()
  }, [])
  if (state.loading) return <>Loading...</>
  if (state.value?.completeness) {
    return (
      <Route
        path="/statistics/completeness"
        component={() => (
          <CompletenessMonitor completeness={state.value?.completeness} />
        )}
      />
    )
  }
}

export default StatisticsPage
