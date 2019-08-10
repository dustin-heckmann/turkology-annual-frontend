import React from 'react'

interface Props {
    total: number | null
}

export default ({ total }: Props) => {
    if (total === null)
        return <></>
    return <>
        <span>{total} entries found</span>
    </>
}