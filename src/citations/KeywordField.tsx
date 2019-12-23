import React from 'react'
import { Keyword } from './Citation'
import styles from './KeywordField.module.css'

interface Props {
  keyword: Keyword
}

export const KeywordField = ({ keyword }: Props) => {
  const hierarchy = []

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
