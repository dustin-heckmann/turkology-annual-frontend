import React from 'react'
import { Completeness } from './statisticsService'
import styles from './CompletenessMonitor.module.css'

interface Props {
  completeness: Record<string, Completeness>
}

const CompletenessMonitor = ({ completeness }: Props) => {
  const numericRows = Object.entries(completeness).map((entry, number) => (
    <CompletenessEntry
      completeness={entry[1]}
      volume={parseInt(entry[0])}
      key={number}
    />
  ))
  const missingNumbersRows = Object.entries(
    completeness
  ).map((entry, number) => (
    <MissingCitationsEntry
      completeness={entry[1]}
      volume={parseInt(entry[0])}
      key={number}
    />
  ))

  return (
    <>
      <h2>Completeness statistics</h2>
      <div className={styles.headerRow}>
        <span className={styles.volume}>Volume</span>
        <span className={styles.expected}>Expected</span>
        <span className={styles.actual}>Actual</span>
        <span className={styles.missing}>Missing (abs.)</span>
        <span className={styles.missingRelative}>Missing (rel.)</span>
        {/* {completeness.missing && completeness.missing.length ?
      <span className={styles.missingNumbers}>{completeness.missing.join(', ')}</span>
      : '-'} */}
      </div>

      {numericRows}

      <h2>Missing numbers by volume</h2>
      {missingNumbersRows}
    </>
  )
}

const CompletenessEntry = ({
  completeness,
  volume
}: {
  completeness: Completeness
  volume: number
}) => (
  <div
    className={`${styles.row} ${
      completeness.actual === completeness.expected ? styles.complete : null
    }`}
  >
    <span className={styles.volume}>{volume}</span>
    <span className={styles.expected}>{completeness.expected}</span>
    <span className={styles.actual}>{completeness.actual}</span>
    <span className={styles.missing}>
      {completeness.expected - completeness.actual}
    </span>
    <span className={styles.missing}>
      {(
        ((completeness.expected - completeness.actual) /
          completeness.expected) *
        100
      ).toFixed(2)}{' '}
      %
    </span>
  </div>
)

const MissingCitationsEntry = ({
  completeness,
  volume
}: {
  completeness: Completeness
  volume: number
}) =>
  completeness.actual === completeness.expected ? null : (
    <div>
      <h2>{volume}</h2>
      <span>
        {completeness.missing && completeness.missing.length ? (
          <span className={styles.missingNumbers}>
            {completeness.missing.join(', ')}
          </span>
        ) : (
          '-'
        )}
      </span>
    </div>
  )

export default CompletenessMonitor
