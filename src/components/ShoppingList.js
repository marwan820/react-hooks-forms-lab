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
  const[itemName,setitemName] = useState("")
  const[itemCategory,setItemCategory]= useState("Produce")





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
 
  const handleCategoryChange= (event) => {setSelectedCategory(event.target.value)}



function onItemFormSubmit(){ 
  console.log(e)
    // e.preventDefault()
    // setitemName(e.target.value)
    // setItemCategory(e.target.value)

    // const newItem = {
    //   id: uuid(), // the `uuid` library can be used to generate a unique id
    //   name: itemName,
    //   category: itemCategory}
      
    //   const newArray = [...items,newItem]
      
    //   setItems(newArray)

    
    
    }
    
  

   

return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} items={items} itemName={itemName}  itemCategory={itemCategory} />
      <Filter  selectedCategory={selectedCategory}  search={search}  onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
