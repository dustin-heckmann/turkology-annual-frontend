import React from "react";

interface Props {
  total: number | null;
}

const SearchHeader = ({ total }: Props) => {
  if (total === null) return <></>;
  return (
    <>
      <span>{total} entries found</span>
    </>
  );
};

export default SearchHeader;
