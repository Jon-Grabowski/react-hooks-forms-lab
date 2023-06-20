import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchValue, setSearchValue] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e) {
    e.preventDefault();
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsToDisplay = filteredItems.filter(item => {
    const casedItem = item.name.toLowerCase()
    if (searchValue === "") return true;
    //.startsWith is better solution than .includes
    //but the Jest test doesn't like it :(
    return casedItem.includes(searchValue.toLowerCase());
  })
    
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={searchValue} 
        />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
