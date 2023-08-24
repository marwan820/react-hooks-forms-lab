import React from "react";

function Filter({ onCategoryChange,onSearchChange,search,selectedCategory}) {



  return (
    <div className="Filter">
      <input  id="search" type="text"value={search} onChange={onSearchChange} name="search" placeholder="Search..." />
      <select id="category" value={selectedCategory} name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
