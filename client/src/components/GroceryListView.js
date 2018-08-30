import React from 'react';

const GroceryListView = ({list, handleChange, name}) => {
  const showList = (name === "addItem") 
  ? list.map((item) => (
    <div key={item}>
      <span>{item}</span>
      <button className="remove" name="remove" value={item} onClick={handleChange} style={{float:'right'}}>X</button>
      <button name="add" value={item} onClick={handleChange} style={{float:'right'}}>Buy Now</button>
    </div>
  )) : list.map((item) => (
    <div key={item}> 
      <span >{item}</span>
      <button className="remove" value={item} onClick={handleChange} style={{float:'right'}}>Remove</button>
    </div>
  ));
  
  return (
    <div>
      {showList}
    </div>
  ); 
};

export default GroceryListView;