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

type SearchValues = [string, string];

type TransactionDisplayerProps = {
  transactions: Transaction[];
  searchValues: SearchValues;
};

export default function TransactionDisplayer({ transactions, searchValues }: TransactionDisplayerProps): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, selectedField] = searchValues;
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredTransactions = transactions.filter((transaction: Transaction) => {
    if (!normalizedSearchTerm) {
      return true;
    }

    if (selectedField === "company") {
      return transaction.company.toLowerCase().includes(normalizedSearchTerm);
    }

    if (selectedField === "amount") {
      return transaction.amount.toString().includes(normalizedSearchTerm);
    }

    return transaction.id.toString().includes(normalizedSearchTerm);
  });

  const remittancesCount = filteredTransactions.length;

  function getRemittances(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;
    const remittances = filteredTransactions.slice(offset, offset + pageSize);

    return remittances;
  }

  function ceilRemittances(number: number) {
    return Math.ceil(number / 10);
  }

  return (
    <>
      <PaginationNumbers pages={ceilRemittances(remittancesCount)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={classes["transactions-container"]}>
        {getRemittances(currentPage, 10).map((transaction: Transaction) => (
          <TransactionItem
            id={transaction.id}
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
