import React from 'react'
import styles from './ErrorMessage.module.css'

interface Props {
  message?: string
}

const ErrorMessage = ({ message }: Props) => <div className={styles.error}>
  {message || 'An error ocurred. Please try again later.'}
</div>


export default ErrorMessage
