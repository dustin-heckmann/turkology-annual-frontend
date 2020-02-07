import React from 'react'
import styles from './PageTitle.module.css'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'
import { Link } from 'react-router-dom'

const PageTitle = () => (
  <div className={styles.pageTitle}>
    <Breadcrumbs separator={<b> / </b>} item={Link} />
  </div>
)

export default PageTitle
