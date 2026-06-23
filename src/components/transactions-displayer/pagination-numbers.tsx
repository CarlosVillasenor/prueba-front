import classes from "./pagination-numbers.module.css";

export default function PaginationNumbers(): React.JSX.Element {
  return (
    <div className={classes["pagination-numbers"]}>
      <span className={classes["pagination-number"]}>1</span>
      <span className={classes["pagination-number"]}>2</span>
      <span className={classes["pagination-number"]}>3</span>
      <span className={classes["pagination-number"]}>4</span>
      <span className={classes["pagination-number"]}>5</span>
    </div>
  );
}
