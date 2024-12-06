import React from "react";

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <aside>
      <h3>Filter</h3>
      <label>Category:</label>
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Books">Books</option>
        <option value="Clothing">Clothing</option>
      </select>

      <label>Price Range:</label>
      <input
        type="range"
        min="0"
        max="500"
        value={filters.price}
        onChange={(e) => setFilters({ ...filters, price: e.target.value })}
      />
      <span>${filters.price}</span>
    </aside>
  );
};

export default FilterSidebar;
