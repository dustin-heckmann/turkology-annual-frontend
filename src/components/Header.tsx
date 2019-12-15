import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../img/logo_cluster.png'
import styles from './Header.module.css'
import Navigation from './Navigation'
import PageTitle from './PageTitle'
import SearchBar from './SearchBar'

const Header = () => {
  const { search } = useLocation()
  const query = new URLSearchParams(search).get('q') ?? ''
  return (
    <>
      <Navigation />

      <header className={styles.header}>
        <img
          className={styles.clusterLogo}
          src={logo}
          alt="Cluster of Excellence - Asia and Europe in a Global Context"
        />
        <div className={styles.appName}>
          <Link to="/citations">Turkology Annual Online</Link>
        </div>
        <div className={styles.searchBar}>
          <SearchBar query={query} />
        </div>
      </header>
      <PageTitle title="" />
    </>
  )
}
export default Header
