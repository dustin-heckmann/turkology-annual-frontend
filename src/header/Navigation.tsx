import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => (
  <nav className={styles.navigation}>
    <Link to="/citations">Publications</Link>
    <Link to="/statistics/completeness">Completeness</Link>
    <Link to="/about">About</Link>
    <a href="/export">Export</a>
  </nav>
)

export default Navigation
