import React from 'react'
import styles from './CitationField.module.css'
import { PublishedIn } from '../Citation'

interface Props {
  label: string
  value?: PublishedIn
}

const PublishedInField = ({ label, value }: Props) => {
  if (!value) {
    return <></>
  }
  switch (value.type) {
    case 'ta':
      return <TaField label={label} value={value} />

    case 'journal':
      return <JournalField label={label} value={value} />
  }
}

type InternalProps = Props & { value: PublishedIn }

const JournalField = ({ label, value }: InternalProps) => {
  return (
    <div className={styles.field}>
      <label>{label}:</label>
      {value.journal && `Journal: ${value.journal},`}{' '}
      {value.type === 'ta' && 'TA'}
      {'  '}
      {value.volume && `volume ${value.volume},`}
      {'  '}
      {value.issue && (
        <>
          issue {value.issue},{'  '}
        </>
      )}
      {value.yearStart}
      {value.yearStart && value.yearEnd && '-'}
      {value.yearEnd}
      {value.year}
      {(value.yearStart || value.yearEnd || value.year) && ','} pages{' '}
      {value.pageStart}-{value.pageEnd}
    </div>
  )
}

const TaField = ({ label, value }: InternalProps) => {
  return (
    <div className={styles.field}>
      <label>{label}:</label>
      TA {value.volume}.{value.number}, pages {value.pageStart}-{value.pageEnd}
    </div>
  )
}

export default PublishedInField
