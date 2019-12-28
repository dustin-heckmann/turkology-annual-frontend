import React from 'react'
import { Link } from 'react-router-dom'
import Citation from './Citation'
import styles from './CitationListItem.module.css'

interface Props {
  citation: Citation
  matchNumber: number
}

const CitationListItem = (props: Props) => {
  const {
    citation: {
      id,
      volume,
      title,
      number,
      authors,
      rawText,
      location,
      datePublished,
      keywords
    },
    matchNumber
  } = props
  const url = `/citations/${id}`
  return (
    <Link to={url} className={styles.link}>
      <section className={styles.listItem}>
        <div className={styles.number}>{matchNumber}</div>
        <div className={styles.content}>
          <span className={styles.title}>{title || rawText}</span>
          {authors
            ? authors
                .map(({ first, last, middle, raw }) =>
                  first && last ? `${last}, ${first}` : raw
                )
                .join(' | ')
            : ''}
          <div>
            {location}
            {location && datePublished ? ', ' : ''}
            {datePublished?.year}
          </div>
          TA {volume}.{number}
          <div className={styles.keywordsLine}>
            {keywords?.map(({ nameEN, raw, code }) => (
              <Link to={`/citations?keyword=${code}`} key={code}>
                {nameEN || raw}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Link>
  )
}

export default CitationListItem
