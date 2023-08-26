import React, { useState } from "react";

function ItemForm({onItemFormSubmit,itemCategory,itemName,onChangeCategory,itemInputSubmit}){
  return (
    <form   type="submit" className="NewItem" onSubmit={onItemFormSubmit}>
       <label>
        Name:
        <input type="text" name="name" onChange={itemInputSubmit} value={itemName} />
        </label>

      <label>
        Category:
        <select name="category" onChange={onChangeCategory} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )};


export default ItemForm;
