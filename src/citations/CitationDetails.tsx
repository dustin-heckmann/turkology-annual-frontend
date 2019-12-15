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
            <CitationField
              label="TA entry"
              value={`Volume ${citation.volume}, No. ${citation.number}`}
            />
            <CitationField
              label="Publication type"
              value={startCase(toLower(citation.type))}
            />
            <CitationField label="Title" value={citation.title} />
            <PeopleField label="Authors" people={citation.authors} />
            <PeopleField label="Editors" people={citation.editors} />
            <CitationField
              label="Number of pages"
              value={citation.numberOfPages}
            />
            <CitationFieldMulti
              label="Material"
              values={
                citation.material ? citation.material.map(mat => mat.raw) : []
              }
            />
            <CitationField
              label="Number of volumes"
              value={citation.numberOfVolumes}
            />
            <CitationField label="Series" value={citation.series} />
            <CitationField label="Location" value={citation.location} />
            <DateField label="Publication date" date={citation.datePublished} />
            <CitationFieldMulti label="Reviews" values={citation.reviews} />
            <CitationField label="Comment" value={citation.comment} />
            <span className={styles.keywords}>
              <CitationFieldMulti
                label="Keywords"
                values={citation.keywords.map(
                  keyword => `${keyword.code}. ${keyword.nameEN}`
                )}
              />
            </span>
            <CitationFieldMulti
              label="Amendments"
              values={citation.amendments}
            />
            <CitationField label="Raw string" value={citation.rawText} />
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
