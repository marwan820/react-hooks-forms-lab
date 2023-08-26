import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid  } from "uuid";

function ShoppingList({ items, setItems }) {
  
  
  //Filterlist states and setter props
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search,setSearch] = useState("")
  
  const onSearchChange = (event) => {setSearch(event.target.value)}
  const handleCategoryChange= (event) => {setSelectedCategory(event.target.value)}
  
  // ItemForm states and setter props 
  const[itemName,setitemName] = useState("")
  const[itemCategory,setItemCategory]= useState("Produce")

  const itemInputSubmit = (e) => {
    e.preventDefault()
    setitemName(e.target.value)}

  const onChangeCategory = (e) => { 
    e.preventDefault()
    setItemCategory(e.target.value)}

  function onItemFormSubmit(e){ 
    e.preventDefault()
    
    const newItem = {
      id: uuid(), 
      name: itemName,
      category: itemCategory}
      
      const newArray = [...items,newItem]
      
      setItems(newArray)
      
      setitemName("")
      setItemCategory("")
    }

  

// Shopping List display 
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

  




    
  

   

return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} itemInputSubmit={itemInputSubmit} itemName={itemName}  itemCategory={itemCategory} onChangeCategory={onChangeCategory} />
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
