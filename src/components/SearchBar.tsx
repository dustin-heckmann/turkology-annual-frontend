import { History } from 'history'
import React, { ChangeEvent } from 'react'
import { useHistory } from 'react-router'
import styles from './SearchBar.module.css'

interface Props {
  query?: string
  onSubmit?: Function
}

const triggerSearch = (query: string, history: History) => {
  history.push(`/citations?query=${query}`)
}

let timeout: number | undefined
const executeAfterTimeout = (func: Function) => {
  clearTimeout(timeout)
  timeout = setTimeout(func, 500)
}

const SearchBar = ({ query }: Props) => {
  const history = useHistory()
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="search"
        name="q"
        defaultValue={query}
        placeholder="Search..."
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const query = event.target.value
          executeAfterTimeout(() => {
            triggerSearch(query, history)
          })
        }}
      />
    </div>
  )
}
export default SearchBar
