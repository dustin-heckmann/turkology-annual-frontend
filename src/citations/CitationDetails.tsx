import React, { Component } from "react";
import { getCitation } from "./citationService";
import Citation from "./Citation";
import CitationField from "./CitationField";
import PeopleField from "./PeopleField";
import DateField from "./DateField";
import styles from './CitationDetails.module.css';
import CitationFieldMulti from "./CitationFieldMulti";

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
      return <>
        <section className={styles.citationDetails}>
          <CitationField label='TA entry' value={`Volume ${citation.volume}, No. ${citation.number}`} />
          <CitationField label='Publication type' value={citation.type} />
          <CitationField label='Title' value={citation.title} />
          <PeopleField label='Authors' people={citation.authors} />
          <PeopleField label='Editors' people={citation.editors} />
          <CitationField label='Number of pages' value={citation.numberOfPages} />
          <CitationFieldMulti label='Material' values={citation.material ? citation.material.map(mat => mat.raw) : []} />
          <CitationField label='Number of volumes' value={citation.numberOfVolumes} />
          <CitationField label='Series' value={citation.series} />
          <CitationField label='Comment' value={citation.comment} />
          <CitationField label='Location' value={citation.location} />
          <DateField label='Publication date' date={citation.datePublished} />
          <CitationFieldMulti label='Reviews' values={citation.reviews} />
          <CitationField label='Raw string' value={citation.rawText} />
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
