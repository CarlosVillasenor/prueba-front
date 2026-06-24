'use client';

import TransactionItem from "./transaction-item";
import classes from "./transactions-displayer.module.css";
import PaginationNumbers from "./pagination-numbers";
import { useState } from "react";
import { useSearchInput } from "../search-input/search-input-context";

type Transaction = {
  id: number;
  created_at: string;
  company: string;
  amount: number;
};

export default function TransactionDisplayer({ transactions }: { transactions: Transaction[] }): React.JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchValues } = useSearchInput();
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

  function getGroup(number: number) {
    return Math.ceil(number / 10);
  }

  return (
    <>
      <PaginationNumbers pages={getGroup(remittancesCount)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
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
