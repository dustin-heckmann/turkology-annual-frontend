import React from 'react';
import { Link } from 'react-router-dom';
import Citation from './Citation';
import styles from './CitationListItem.module.css'; // Import css modules stylesheet as styles

interface Props {
    citation: Citation,
    matchNumber: number
}

export default (props: Props) => {
  const {
    citation:
        {
          id, volume, title, number, authors, rawText, location, datePublished, keywords,
        },
    matchNumber,
  } = props;
  const url = `/citations/${id}`;
  return (
    <section className={styles.listItem}>
      <div className={styles.number}>
        <Link to={url}>{matchNumber}</Link>
      </div>
      <div className={styles.content}>
        <summary className={styles.title}>
          <Link to={url}>{title || rawText}</Link>
        </summary>
        <div className={styles.detailLine}>
          {authors ? authors.map(({
            first, last, middle, raw,
          }) => (first && last ? `${last}, ${first}` : raw)).join(' | ') : ''}
        </div>
        <div className={styles.detailLine}>
          {location}
          {location && datePublished ? ', ' : ''}
          {datePublished}
        </div>
        <div className={styles.detailLine}>
TA
          {volume}
,
          {number}
        </div>
        <div className={styles.keywordsLine}>
          {keywords.map(
            ({ nameEN, raw, code }) => (
              <Link to={`/citations?keyword=${code}`} key={code}>{nameEN || raw}</Link>
            ),
          )}
        </div>
      </div>

    </section>
  );
};
