import React from "react";
import styles from './CitationField.module.css'

interface Props {
  label: string;
  value?: string | number | null;
}

export default ({ label, value }: Props) => {
  if (!value) {
    return <></>
  }
  return <div className={styles.field}>
    <label>{label}:</label> <span className={styles.value} >{value}</span>
  </div>
}
