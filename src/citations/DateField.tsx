import React from 'react'
import styles from './CitationField.module.css'

interface Props {
  label: string
  value?: string
}

const DateField = ({ label, value }: Props) => {
  if (!value) {
    return <></>
  }
  return (
    <div className={styles.field}>
      <label>{label}: </label>
      <span className="value">{new Date(value).toLocaleDateString()}</span>
    </div>
  )
}
export default DateField
