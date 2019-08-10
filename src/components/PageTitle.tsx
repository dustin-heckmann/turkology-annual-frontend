import React from 'react'
import styles from './PageTitle.module.css'

interface Props {
    title: string
}

export default ({ title }: Props) => <h1 className={styles.pageTitle}>{title}</h1>
