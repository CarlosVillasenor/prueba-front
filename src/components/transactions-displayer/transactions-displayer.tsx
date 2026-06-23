import TransactionItem from "./transaction-item";
import { getRemittances, getRemittancesCount } from "../../../lib/remittances";
import classes from "./transactions-displayer.module.css";
import PaginationNumbers from "./pagination-numbers";

export default async function TransactionDisplayer(): Promise<React.JSX.Element> {
  const transactions = await getRemittances(3);
  const transactionsCount = await getRemittancesCount();

  type Transaction = {
    id: number;
    created_at: string;
    company: string;
    amount: number;
  };

  // console.log("Transactions count:", transactionsCount);
  // console.log("Transactions:", transactions);

  return (
    <>
      <PaginationNumbers />
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
    </>
  );
}
