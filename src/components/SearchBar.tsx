import React, { Component, FormEvent } from 'react'
import styles from './SearchBar.module.css'

interface Props {
  query?: string
  onSubmit?: Function
}

export default class SearchBar extends Component<Props> {
  constructor(props: Props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: FormEvent) {
    this.setState({ value: event.target })
  }

  handleSubmit(event: FormEvent) {
    // this.setState({value: event.target.value});
    if (this.props.onSubmit) this.props.onSubmit(this.props.query)
    event.preventDefault()
  }

  render() {
    return (
      <form name="quicksearch" className={styles.searchBar} action="/citations">
        <input
          className={styles.input}
          type="search"
          name="q"
          defaultValue={this.props.query}
          placeholder="Search..."
        />
        <button type="submit" value="Submit" className={styles.button} />
      </form>
    )
  }
}
