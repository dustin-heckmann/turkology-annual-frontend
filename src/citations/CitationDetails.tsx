import React, { Component } from 'react'
import { getCitation } from './citationService'
import Citation from './Citation'
import CitationField from './CitationField'
import PeopleField from './PeopleField'
import DateField from './DateField'
import styles from './CitationDetails.module.css'
import CitationFieldMulti from './CitationFieldMulti'
import { startCase, toLower } from 'lodash'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import PublishedInField from './PublishedInField'
import { KeywordField } from './KeywordField'

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
      return (
        <>
          <BreadcrumbsItem to={`/citations/${citation.id}`}>
            TA {citation.volume}.{citation.number}
          </BreadcrumbsItem>
          <section className={styles.citationDetails}>
            <CitationField label="TA entry">
              Volume {citation.volume}, No. {citation.number}
            </CitationField>

            <CitationField label="Publication type">
              {startCase(toLower(citation.type))}
            </CitationField>
            <CitationField label="Title">{citation.title}</CitationField>

            <PeopleField label="Authors" people={citation.authors} />

            <PublishedInField
              label="Published in"
              value={citation.publishedIn}
            />

            <PeopleField label="Editors" people={citation.editors} />

            <CitationField label="Number of pages">
              {citation.numberOfPages}
            </CitationField>

            <CitationFieldMulti label="Material" values={citation.material} />

            <CitationField label="Number of volumes">
              {citation.numberOfVolumes}
            </CitationField>

            <CitationField label="Series">{citation.series}</CitationField>

            <CitationField label="Location">{citation.location}</CitationField>

            <CitationField label="Publication date">
              {citation.datePublished?.year}
            </CitationField>

            <DateField label="Start date" value={citation.date?.start} />

            <DateField label="End date" value={citation.date?.end} />

            <CitationFieldMulti label="Reviews" values={citation.reviews} />

            <CitationFieldMulti label="Comments" values={citation.comments} />
            <CitationField label="Keywords">
              <span className={styles.keywords}>
                {citation.keywords?.map(keyword => (
                  <KeywordField keyword={keyword} />
                ))}
              </span>
            </CitationField>
            <CitationFieldMulti
              label="Amendments"
              values={citation.amendments}
            />
            <div className={styles.rawText}>{citation.rawText}</div>
          </section>
        </>
      )
    }
    return <></>
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
