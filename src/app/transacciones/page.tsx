import classes from "./page.module.css";
import UserMenu from "../../components/user-menu/user-menu";
import DateHeader from "../../components/date-header/date-header";
import ActionButtons from "../../components/action-buttons/action-buttons";
import TransactionsDisplayer from "../../components/transactions-displayer/transactions-displayer";
import Calculator from "../../components/calculator/calculator";

export default function Transactions(): React.JSX.Element {
  return (
    <div className={classes.container}>
      <div className={classes["left-panel"]}>


        <div className={classes["header"]}>
          Ventanilla <strong>Digital</strong>
        </div>
        <div className={classes["divider"]}></div>
        <div className={classes["title"]}>
          Remesas
        </div>
        <Calculator />

      </div>
      <div className={classes["right-panel"]}>
        <div className={classes["menu-container"]}>
          <UserMenu />
        </div>
        <DateHeader />
        <div className={classes["menu-container"]}>
          <ActionButtons />
        </div>
        <TransactionsDisplayer />
      </div>
    </div>
  );
}
