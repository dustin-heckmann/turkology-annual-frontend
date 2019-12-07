import React from 'react'
import styles from './PageTitle.module.css'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => (
  <div className={styles.pageTitle}>{title}</div>
)

export default PageTitle
