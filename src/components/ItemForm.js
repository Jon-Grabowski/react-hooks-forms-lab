import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('Produce')
  
  function handleItemName(e) {
    setName(e.target.value)
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }
  
  const newObj = {
    id: uuid(),
    name: name,
    category: category
  }

  return (
    <form className="NewItem" onSubmit={e=>onItemFormSubmit(e, newObj)}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={name} 
          onChange={handleItemName} 
          />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} >
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
