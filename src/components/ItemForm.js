import React, { useState } from "react";
import { v4 as uuid  } from "uuid";

function ItemForm({onItemFormSubmit}){

  // ItemForm states and setter props 
const[itemName,setitemName] = useState("")
const[itemCategory,setItemCategory]= useState("Produce")


function handleSubmit(e){
  e.preventDefault()
  onItemFormSubmit(newItem)
  setitemName("")
  setItemCategory("")}

const itemInputSubmit = (e) => {
  e.preventDefault()
  setitemName(e.target.value)}

const onChangeCategory = (e) => { 
  e.preventDefault()
  setItemCategory(e.target.value)}
  
  const newItem = {
    id: uuid(), 
    name: itemName,
    category: itemCategory}

  return (
    <form   type="submit" className="NewItem" onSubmit={handleSubmit}>
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
