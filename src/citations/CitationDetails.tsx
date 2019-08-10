import React, { Component } from "react";
import { getCitation } from "./citationService";
import Citation from "./Citation";
import CitationField from "./CitationField";
import PeopleField from "./PeopleField";
import DateField from "./DateField";
import styles from './CitationDetails.module.css';

interface Props {
  match: {
    params: {
      citationId: string
    }
  }
}

interface State {
  citation?: Citation
}

export default class CitationDetails extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    const { citation } = this.state
    if (citation) {
      const { id, title, rawText, volume, number, authors, editors, comment, location, datePublished } = citation
      return <>
        <section className={styles.citationDetails}>
          <CitationField label='TA entry' value={`Volume ${volume}, No. ${number}`} />
          <CitationField label='Title' value={title} />
          <PeopleField label='Authors' people={authors} />
          <PeopleField label='Editors' people={editors} />
          <CitationField label='Comment' value={comment} />
          <CitationField label='Location' value={location} />
          <DateField label='Publication date' date={datePublished} />
          <CitationField label='Raw string' value={rawText} />
        </section>
      </>
    } else return (<></>);

  }

  componentDidMount() {
    this.fetchCitation()
  }

  async fetchCitation() {
    const {
      match: {
        params: { citationId }
      }
    } = this.props
    const citation = await getCitation(citationId)
    this.setState({ citation })
  }
}
