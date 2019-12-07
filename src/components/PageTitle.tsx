import React from 'react';
import styles from './PageTitle.module.css';

interface Props {
    title: string
}

export default ({ title }: Props) => <div className={styles.pageTitle}>{title}</div>;
