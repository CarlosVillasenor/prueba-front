import classes from "./page.module.css";
import UserMenu from "../../components/user-menu/user-menu";
import DateHeader from "../../components/date-header/date-header";
import ActionButtons from "../../components/action-buttons/action-buttons";

export default function Transactions(): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes["left-panel"]}>

      </div>
      <div className={classes["right-panel"]}>
        <div className={classes["menu-container"]}>
          <UserMenu />
        </div>
        <DateHeader />
        <div className={classes["menu-container"]}>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}
