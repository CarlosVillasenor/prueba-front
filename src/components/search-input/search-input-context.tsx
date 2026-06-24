'use client';

import { createContext, useContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type SearchValues = [string, string];

type SearchInputContextType = {
  searchValues: SearchValues;
  setSearchValues: Dispatch<SetStateAction<SearchValues>>;
};

const SearchInputContext = createContext<SearchInputContextType | null>(null);

export function SearchInputProvider({ children }: { children: ReactNode }): React.JSX.Element {
  const [searchValues, setSearchValues] = useState<SearchValues>(["", "id"]);

  return (
    <SearchInputContext.Provider value={{ searchValues, setSearchValues }}>
      {children}
    </SearchInputContext.Provider>
  );
}

export function useSearchInput(): SearchInputContextType {
  const context = useContext(SearchInputContext);

  if (!context) {
    throw new Error("useSearchInput must be used within SearchInputProvider");
  }

  return context;
}
