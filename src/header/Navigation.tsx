import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/citations">Search Citations</Link>
    <a href="/export">Export JSON</a>
    <Link to="/about">About</Link>
  </nav>
)

export default Navigation
