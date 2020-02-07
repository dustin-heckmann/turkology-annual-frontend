import React from 'react'
import fieldStyles from './CitationField.module.css'
import { Person } from '../Person'

interface Props {
  label: string
  people?: Person[]
}

const PeopleField = ({ label, people }: Props) => {
  if (!people || !people.length) {
    return <></>
  }
  return (
    <div className={fieldStyles.field}>
      <label>{label}:</label>
      <div>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{person.raw}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PeopleField
