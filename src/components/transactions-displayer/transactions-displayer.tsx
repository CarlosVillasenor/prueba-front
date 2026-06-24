'use client';

import TransactionItem from "./transaction-item";
import classes from "./transactions-displayer.module.css";
import PaginationNumbers from "./pagination-numbers";
import { useState } from "react";

type Transaction = {
  id: number;
  created_at: string;
  company: string;
  amount: number;
};

export default function TransactionDisplayer({ transactions }: { transactions: Transaction[] }): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const remittancesCount = transactions.length;

  function getRemittances(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
    const remittances = transactions.slice(offset, offset + pageSize);

    return remittances;
  }

  function getGroup(number: number) {
    return Math.ceil(number / 10);
  }

  return (
    <>
      <PaginationNumbers pages={getGroup(remittancesCount)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={classes["transactions-container"]}>
        {getRemittances(currentPage, 10).map((transaction: Transaction) => (
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
