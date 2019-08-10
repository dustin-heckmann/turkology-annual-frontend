import React from 'react'
import Citation from './Citation';
import CitationListItem from './CitationListItem';

interface Props {
    citations: Citation[],
    offset?: number
}

export default ({ citations, offset }: Props) => {

    return (<>
        {citations.map((citation, index) => (
            <CitationListItem matchNumber={index + (offset || 0) + 1} key={citation.id} citation={citation} />
        ))}
    </>)
}
