'use client';

import { useState } from "react";
import SearchInput from "../search-input/search-input";
import TransactionsDisplayer from "../transactions-displayer/transactions-displayer";

type Transaction = {
  id: number;
  created_at: string;
  company: string;
  amount: number;
};

type SearchValues = [string, string];

export default function TransaccionesClient({ transactions }: { transactions: Transaction[] }): React.JSX.Element {
  const [searchValues, setSearchValues] = useState<SearchValues>(["", "id"]);

  return (
    <>
      <SearchInput searchValues={searchValues} setSearchValues={setSearchValues} />
      <TransactionsDisplayer transactions={transactions} searchValues={searchValues} />
    </>
  );
}
