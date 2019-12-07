import React from "react";
import styles from "./CitationField.module.css";

interface DateYear {
  year: number;
}

interface Date {
  date: DateYear;
}

interface Props {
  label: string;
  date: Date;
}

const DateField = ({ label, date }: Props) => {
  if (!date) {
    return <></>;
  }
  return (
    <div className={styles.field}>
      <label>{label}: </label>
      <span className="value">{date}</span>
    </div>
  );
};
export default DateField;
