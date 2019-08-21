import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';

export default () => (
  <nav className={styles.navigation}>
    <Link to="/citations">Publications</Link>
    <Link to="/statistics/completeness">Completeness</Link>
  </nav>
)