import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid  } from "uuid";

function ShoppingList({ items, setItems }) {

  //States for for searching 
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search,setSearch] = useState("")

  // States for submitting form to shopping list 
  const[itemName,setItemName] = useState("")
  const[categoryForm,setCategoryform]= useState("Produce")


// 5 === 5; // what's the result? True
// (5 === 5) === true; // what's the result? True
// 4 === 5; // False
// (4 === 5 ) === false;


  function filteredItems(){ 
    const filterCategory = items.filter((item) => {
      if (selectedCategory === "All") return true;
  
      return item.category === selectedCategory;
     }) 
    
     const filterInput = filterCategory.filter((item) =>{
    if (search === "") return true
     return item.name.toLowerCase().includes(search.toLowerCase())
       })
    return filterInput
  }

  function onSearchChange(event){setSearch(event.target.value)}
 
  const handleCategoryChange = (event) => {setSelectedCategory(event.target.value)}
  
  function onItemFormSubmit(e){ 
    e.preventDefault()
    const newItem = { 
    id: uuid (),
    name: setItemName(e.target.value),
    category: setCategoryform(e.target.value)
}

const newArray ={...items,newItem}
    
 
setItems(newArray)

 }
   return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items} itemName={itemName}  categoryForm={categoryForm} />
      <Filter  selectedCategory={selectedCategory} key={Math.floor(Math.random() * 10)} search={search}  onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
