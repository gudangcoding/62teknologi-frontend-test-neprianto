import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div>
      <label>
        Categories:
        <input type="text" name="categories" onChange={handleFilterChange} />
      </label>
      <label>
        Price:
        <select name="price" onChange={handleFilterChange}>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
