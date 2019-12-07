import React from 'react';
import styles from './CitationField.module.css';

interface Props {
  label: string;
  values: string[];
}

export default ({ label, values }: Props) => {
  if (!values || values.length === 0) {
    return <></>;
  }
  return (
    <div className={styles.field}>
      <label>
        {label}
:
      </label>
      <div className={styles.value}>
        {values.map((value) => (
          <li>{value.toString()}</li>
        ))}
      </div>
    </div>
  );
};
