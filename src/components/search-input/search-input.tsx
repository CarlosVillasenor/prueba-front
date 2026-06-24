'use client';

import classes from "./search-input.module.css";
import type { Dispatch, SetStateAction } from "react";

type SearchValues = [string, string];

type SearchInputProps = {
  searchValues: SearchValues;
  setSearchValues: Dispatch<SetStateAction<SearchValues>>;
};

export default function SearchInput({ searchValues, setSearchValues }: SearchInputProps): React.JSX.Element {
  const [inputValue, selectedField] = searchValues;

  return (
    <div className={classes.container}>
      <select
        className={classes.select}
        id="sortBy"
        name="sortBy"
        value={selectedField}
        onChange={(event) => setSearchValues([inputValue, event.target.value])}
      >
        <option value="id">ID</option>
        <option value="company">Compañia</option>
        <option value="amount">Monto</option>
      </select>
      <input
        className={classes.input}
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={(event) => setSearchValues([event.target.value, selectedField])}
      />
    </div>
  );
}
