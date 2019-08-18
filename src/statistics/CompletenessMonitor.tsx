import React from "react";
import { Completeness } from "./statisticsService";

interface Props {
  completeness: Record<string, Completeness>
}

export default ({ completeness }: Props) => {
  const children = Object.entries(completeness).map((entry, number) => (
    <CompletenessEntry completeness={entry[1]} volume={entry[0]} key={number} />
  ))
  return <>
    {children}
  </>
};

const CompletenessEntry = ({ completeness, volume }: { completeness: Completeness, volume: string }) => (
  <>
    <h2>Volume {volume}</h2>
    <p>Expected: {completeness.expected}</p>

    <p>Found: {completeness.actual}</p>


    <p>Missing: {completeness.expected - completeness.actual}</p>

    {completeness.missing && completeness.missing.length ? <p>{completeness.missing.join(', ')}</p> : ''}
  </>
)