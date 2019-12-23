import React from 'react'
import { Link } from 'react-router-dom'
import styles from './RepetitionHeader.module.css'

interface Props {
  volume: string
  number: number
}

export const RepetitionHeader = ({ volume, number }: Props) => {
  return (
    <div className={styles.box}>
      This is a repetition of{' '}
      <Link to={`/citations?volume=${volume}&number=${number}`}>
        TA {volume}.{number}
      </Link>
    </div>
  )
}
