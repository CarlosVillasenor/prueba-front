import classes from "./page.module.css";
import UserMenu from "../../components/user-menu/user-menu";
import DateHeader from "../../components/date-header/date-header";
import ActionButtons from "../../components/action-buttons/action-buttons";
import Calculator from "../../components/calculator/calculator";
import { getAllRemittances, saveRemittance } from "../../../lib/remittances";
import TransactionsDisplayer from "../../components/transactions-displayer/transactions-displayer";

export default async function Transactions(): Promise<React.JSX.Element> {
  const transactions = await getAllRemittances();

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
        <TransactionsDisplayer transactions={transactions} />
      </div>
    </div>
  );
}
