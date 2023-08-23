import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [search,setSearchText] = useState("")
  const [itemForm,setitemForm] = useState("")


console.log(items)
console.log(itemForm)
  // items = is the array of objects 

  // const userDataObject = {search,selectedCategory}

   // function addNewItem(newItem){
   //   // when itemform is submitted 
   //   // take the user input from form and add it to shopping list{items}
   //      setitemForm([...items,newItem])
   //      
  function filteredItems(){ 
    const filterCategory = items.filter((item) => {
      if (selectedCategory === "All") return true;
  
      return item.category === selectedCategory;
     }) 
    
     const filterInput = filterCategory.filter((item) =>{
    if (search === "") return true
     return item.name.charAt(0).toUpperCase() === search.charAt(0).toUpperCase()
       })
    return filterInput
  }

  const onItemFormSubmit = (e) => { 
    setitemForm(e.target.value)
  }
  
  const onSearchChange = (event)=>{setSearchText(event.target.value)}
  const handleCategoryChange = (event) => {setSelectedCategory(event.target.value)}

   return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} props={items} itemForm={itemForm}/>
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
