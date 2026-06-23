import TransactionItem from "./transaction-item";
import { getAllRemittances } from "../../../lib/remittances";
import classes from "./transactions-displayer.module.css";

export default async function TransactionDisplayer(): Promise<React.JSX.Element> {
  const transactions = await getAllRemittances();

  type Transaction = {
    id: number;
    created_at: string;
    company: string;
    amount: number;
  };

  // console.log("Transactions:", transactions);

  return (
    <div className={classes["transactions-container"]}>
      {transactions.map((transaction: Transaction) => (
        <TransactionItem
          key={transaction.id}
          created_at={transaction.created_at}
          company={transaction.company}
          amount={transaction.amount}
        />
      ))}
    </div>
  );
}
