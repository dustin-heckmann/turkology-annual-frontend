import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import styles from './Header.module.css';
import logo from '../img/logo_cluster.png';
import PageTitle from './PageTitle';

interface Props {
  location: {
    search: string
  }
}

export default class Header extends Component<Props> {
  getQuery(): string {
    const { search } = this.props.location
    const query = new URLSearchParams(search).get('q')
    return query || '';
  }
  render() {
    return (

      <>
        <nav className={styles.navigation}><a href="#">Navigation</a></nav>
        <header className={styles.header}>
          <img className={styles.clusterLogo} src={logo} alt="Cluster of Excellence - Asia and Europe in a Global Context"></img>
          <div className={styles.appName}><span>Turkology Annual Online</span></div>
          <div className={styles.searchBar}>
            <SearchBar query={this.getQuery()} />
          </div>
        </header>
        <PageTitle title="Welcome" />
      </>
    )
  }
}

