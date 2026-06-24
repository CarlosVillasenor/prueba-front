'use client';

import TransactionItem from "./transaction-item";
import classes from "./transactions-displayer.module.css";
import PaginationNumbers from "./pagination-numbers";
import FilterCheckbox from "../filter-checkbox/filter-checkbox";
import SearchInput from "../search-input/search-input";
import { useState, useMemo } from "react";

type Transaction = {
  id: number;
  created_at: string;
  charged_at: number;
  company: string;
  amount: number;
};

type SearchValues = [string, string];

type TransactionDisplayerProps = {
  transactions: Transaction[];
};

export default function TransactionDisplayer({ transactions }: TransactionDisplayerProps): React.JSX.Element {
  const [chargedFilter, setChargedFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValues, setSearchValues] = useState<SearchValues>(["", "id"]);
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

  const remittancesCount = useMemo(() => {
    return chargedFilter ?
      filteredTransactions.filter((transaction: Transaction) => transaction.charged_at > 0).length :
      filteredTransactions.length;
  }, [chargedFilter, filteredTransactions]);

  function getCurrentRemittances(page = 1, pageSize = 10): Transaction[] {
    const offset = (page - 1) * pageSize;
    let remittances = filteredTransactions;

    if (chargedFilter) {
      remittances = remittances.filter((transaction: Transaction) => transaction.charged_at > 0);
    }

    remittances = remittances.slice(offset, offset + pageSize);

    return remittances;
  }

  function ceilRemittances(number: number) {
    return Math.ceil(number / 10);
  }

  return (
    <>
      <SearchInput searchValues={searchValues} setSearchValues={setSearchValues} />
      <FilterCheckbox checked={chargedFilter} onChange={() => setChargedFilter(!chargedFilter)} />
      <PaginationNumbers pages={ceilRemittances(remittancesCount)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className={classes["transactions-container"]}>
        {getCurrentRemittances(currentPage).map((transaction: Transaction) => (
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
