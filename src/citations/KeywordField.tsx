import React from 'react'
import { Keyword } from './Citation'

interface Props {
  keyword: Keyword
}

export const KeywordField = ({ keyword }: Props) => {
  return (
    <>
      {keyword.super && (
        <>
          <KeywordField keyword={keyword.super} /> &gt;
        </>
      )}{' '}
      {keyword.nameEN}
    </>
  )
}
