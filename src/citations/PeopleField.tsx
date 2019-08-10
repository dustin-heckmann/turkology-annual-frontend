import React from "react";
import fieldStyles from './CitationField.module.css'
import { Person } from "./Person";

interface Props {
  label: string;
  people?: Person[];
}

export default ({ label, people }: Props) => {
  if (!people || !people.length) {
    return <></>
  }
  return (<div className={fieldStyles.field}>
    <label>{label}:</label>
    <ul className='value'>
      {people.map(person => (
        <li>{person.raw}</li>
      ))}
    </ul>
  </div>)
}
