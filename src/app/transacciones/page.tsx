import classes from "./page.module.css";
import UserMenu from "../../components/user-menu/user-menu";
import DateHeader from "../../components/date-header/date-header";
import ActionButtons from "../../components/action-buttons/action-buttons";
import Calculator from "../../components/calculator/calculator";
import TransaccionesClient from "../../components/transacciones-client/transacciones-client";
import { getAllRemittances } from "../../../lib/remittances";

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
        <TransaccionesClient transactions={transactions} />
      </div>
    </div>
  );
}
