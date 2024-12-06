import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({ category: "", price: 500 });
  const [search, setSearch] = useState("");

  return (
    <FilterContext.Provider value={{ filters, setFilters, search, setSearch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
