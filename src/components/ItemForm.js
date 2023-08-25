import React, { useState } from "react";

function ItemForm({onItemFormSubmit,itemCategory,itemName}){
  return (
    <form   type="submit" className="NewItem" onSubmit={(e) => {onItemFormSubmit(e)}}>
      <label>
        Name:
        <input type="text" name="name"   value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )};


export default ItemForm;
