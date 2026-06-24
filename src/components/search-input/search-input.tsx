import classes from "./search-input.module.css";

export default function SearchInput(): React.JSX.Element {
  return (
    <div className={classes.container}>
      <select className={classes.select} id="sortBy" name="sortBy">
        <option value="id">ID</option>
        <option value="company">Compañia</option>
        <option value="amount">Monto</option>
      </select>
      <input className={classes.input} type="text" placeholder="Buscar..." />
    </div>
  );
}
