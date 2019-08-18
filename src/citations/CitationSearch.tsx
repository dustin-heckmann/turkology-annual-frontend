import React from "react";
import { findCitations } from "./citationService";
import CitationList from "./CitationList";
import Citation from "./Citation";
import SearchHeader from "./SearchHeader";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "./Pagination";
import PaginationSelector from "./PaginationSelector";

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
  pagesTotal: number
  offset: number
  currentPage: number
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
      currentPage: 0,
      pagesTotal: 0,
      offset: 0,
      error: false
    }
  }

  async componentDidMount() {
    this.fetchResults()
  }

  async componentDidUpdate(prevProps: Props, prevState: State) {
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

  async fetchResults(page: number = 0) {
    await this.readURLParameters()
    try {
      const response = await findCitations(this.state.query, page)
      this.setState({
        citations: response.result,
        currentPage: response.currentPage,
        pagesTotal: response.pagesTotal,
        offset: response.offset,
        total: response.total
      })
    } catch (e) {
      this.setState({ error: true })
    }
  }

  render() {
    const { currentPage, pagesTotal, total } = this.state
    const paginationComponent = (
      <PaginationSelector
        pageCount={pagesTotal}
        currentPage={currentPage}
        onPageChange={(newPage: number) => { this.fetchResults(newPage) }} />
    )
    return (this.state.error) ? <ErrorMessage /> : (
      <>
        {paginationComponent}
        <SearchHeader total={total} />
        <CitationList citations={this.state.citations} offset={this.state.offset} />
      </>
    )
  }

}