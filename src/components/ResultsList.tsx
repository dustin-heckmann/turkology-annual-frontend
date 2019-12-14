import React from 'react'
import ResultsListItem from './ResultsListItem'
import Citation from '../citations/Citation'

interface Props {
  citations: Citation[]
  offset: number
}

const ResultsList = ({ citations }: Props) => {
  return citations.map(citation => {
    return <ResultsListItem key={citation.id} citation={citation} />
  })
}

export default ResultsList
