import React from 'react'
import styles from './PageTitle.module.css'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'
import { Link } from 'react-router-dom'

interface Props {}

const PageTitle = ({}: Props) => (
  <div className={styles.pageTitle}>
    <Breadcrumbs
      separator={<b> / </b>}
      item={Link}
      finalProps={{
        style: {}
      }}
    />
  </div>
)

export default PageTitle
