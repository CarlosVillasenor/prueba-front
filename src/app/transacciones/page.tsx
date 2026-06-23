import classes from "./page.module.css";
import UserMenu from "../../components/user-menu/user-menu";
import DateHeader from "../../components/date-header/date-header";

export default function Transactions(): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes["left-panel"]}>

      </div>
      <div className={classes["right-panel"]}>
        <div className={classes["user-menu-container"]}>
          <UserMenu />
        </div>
        <DateHeader />
      </div>
    </div>
  );
}
