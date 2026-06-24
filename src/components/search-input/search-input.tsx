'use client';

import classes from "./search-input.module.css";
import { useSearchInput } from "./search-input-context";

export default function SearchInput(): React.JSX.Element {
  const { searchValues, setSearchValues } = useSearchInput();
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
