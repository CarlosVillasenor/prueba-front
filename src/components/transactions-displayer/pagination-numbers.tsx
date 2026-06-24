import classes from "./pagination-numbers.module.css";

export default function PaginationNumbers(
    { pages, currentPage, setCurrentPage }: { pages: number; currentPage: number; setCurrentPage: (page: number) => void }
  ): React.JSX.Element {
  return (
    <div className={classes["pagination-numbers"]}>
      {Array.from({ length: pages }, (_, i) => (
        <span
          key={i}
          className={`${classes["pagination-number"]} ${currentPage === i + 1 ? classes["active"] : ""}`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
