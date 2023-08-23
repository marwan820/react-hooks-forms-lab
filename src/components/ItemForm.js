import React from "react";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ItemForm({onItemFormSubmit,itemForm}) {
  
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,}

    const newArray = [...itemForm,newItem].map(item => <Item key={item.id} name={item.name}  />)

  // create a new Item with name={} and category{}

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemForm} />
      </label>

      <label>
        Category:
        <select name="category" value={"Produce"}>
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
