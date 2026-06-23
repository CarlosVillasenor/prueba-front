import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import classes from "./date-header.module.css";

const today = new Date();
const formattedDate = today.toLocaleDateString("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function DateHeader() {
  return (
    <div className={classes.container}>
      <div className={classes["date-info"]}>
        <h2 className={classes.title}>Hoy</h2>
        <p className={classes.date}>{formattedDate}</p>
      </div>

      <button className={classes["calendar-button"]}>
        <FontAwesomeIcon icon={faCalendarDays} className={classes.icon} />
      </button>
    </div>
  );
}
