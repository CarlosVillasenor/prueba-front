import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders, faPrint } from "@fortawesome/free-solid-svg-icons";
import classes from "./action-buttons.module.css";

export default function ActionButtons() {
  return (
    <div className={classes.container}>
      <button className={classes.button} aria-label="Search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={classes.icon}
        />
      </button>

      <button className={classes.button} aria-label="Filter">
        <FontAwesomeIcon
          icon={faSliders}
          className={classes.icon}
        />
      </button>

      <button className={classes.button} aria-label="Print">
        <FontAwesomeIcon
          icon={faPrint}
          className={classes.icon}
        />
      </button>
    </div>
  );
}