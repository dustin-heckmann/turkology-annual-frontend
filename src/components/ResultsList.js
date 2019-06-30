import React, { Component } from 'react'
import ResultsListItem from './ResultsListItem';

const ResultsList = ({citations}) => {
    return citations.map((citation) => {
        return (
        <ResultsListItem key={citation.id} citation={citation} />
    )}
    );
}

export default ResultsList
