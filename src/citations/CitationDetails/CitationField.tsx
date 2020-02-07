import React, { ReactNode } from 'react'
import styles from './CitationField.module.css'

interface Props {
  label: string
  children: ReactNode
}

const CitationField = ({ label, children }: Props) => {
  if (!children) {
    return <></>
  }
  return (
    <div className={styles.field}>
      <label>{label}:</label>
      {children}
    </div>
  )
}

export default CitationField
