import React from "react";
import { findCitations } from "./citationService";
import CitationList from "./CitationList";
import Citation from "./Citation";
import SearchHeader from "./SearchHeader";
import ErrorMessage from "../components/ErrorMessage";

interface Props {
  location: {
    search: string
  }
}

interface State {
  query: {
    volume?: string
    fullText?: string,
    keyword?: string,
  }
  total: number | null
  citations: Citation[]
  error: boolean
}

interface Params {
  volume: string
}


export default class CitationSearch extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      query: {},
      citations: [],
      total: null,
      error: false
    }
  }

  async componentDidMount() {
    this.fetchResults()
  }

  async componentDidUpdate(prevProps: Props) {
    if (prevProps.location.search !== this.props.location.search) {
      this.fetchResults()
    }
  }

  async readURLParameters() {
    const params = new URLSearchParams(this.props.location.search)
    const volume = params.get('volume') || undefined
    const keyword = params.get('keyword') || undefined
    const fullText = params.get('q') || undefined
    await this.setState({ query: { volume, fullText, keyword } })
  }

  async fetchResults() {
    await this.readURLParameters()
    try {
      const resultList = await findCitations(this.state.query)
      this.setState({
        citations: resultList.result,
        total: resultList.total
      })
    } catch (e) {
      this.setState({ error: true })
    }
  }

  render() {
    return (this.state.error) ? <ErrorMessage /> : (
      <>
        <SearchHeader total={this.state.total} />
        <CitationList citations={this.state.citations} />
      </>
    )
  }

}