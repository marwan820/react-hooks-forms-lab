import React, { useState } from "react";
import items from "../data/items"
import { v4 as uuid } from "uuid"

function ItemForm({onItemFormSubmit,itemName,categoryForm}) {
  const newItem = {
    id:uuid(),
    name:itemName,
    category:categoryForm

  }

  function addElement(object){
    setItems([...items,object])
  }




  

  return (
    <form   type="submit" className="NewItem" onSubmit={onItemFormSubmit} >
      <label>
        Name:
        <input type="text" name="name"   value={newItem} />
      </label>

      <label>
        Category:
        <select name="category" value={categoryForm}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
