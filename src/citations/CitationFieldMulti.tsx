import React from 'react'
import styles from './CitationFieldMulti.module.css'

interface Props {
  label: string
  values: string[]
}

const CitationFieldMulti = ({ label, values }: Props) => {
  if (!values || values.length === 0) {
    return <></>
  }
  return (
    <div className={styles.field}>
      <label>{label}:</label>
      {values.map((value, index) => (
        <li key={index}>{value.toString()}</li>
      ))}
    </div>
  )
}

export default CitationFieldMulti
