import React from 'react'
import { Link } from 'react-router-dom'
import Citation from './Citation'
import styles from './CitationListItem.module.css' // Import css modules stylesheet as styles

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
    <section className={styles.listItem}>
      <div className={styles.number}>
        <Link to={url}>{matchNumber}</Link>
      </div>
      <div>
        <summary className={styles.title}>
          <Link to={url}>{title || rawText}</Link>
        </summary>
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
          {datePublished}
        </div>
        TA
        {volume},{number}
        <div className={styles.keywordsLine}>
          {keywords.map(({ nameEN, raw, code }) => (
            <Link to={`/citations?keyword=${code}`} key={code}>
              {nameEN || raw}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CitationListItem
