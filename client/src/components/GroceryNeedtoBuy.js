import React from 'react';

const GroceryNeedtoBuy = ({groceryList, handleChangeInGroceryList}) => {
  const needToBuy = groceryList.map((item) => (
    <div key={item}>
      <span>{item}</span>
      <button className="remove"  
        name="remove"
        value={item}
        onClick={handleChangeInGroceryList}
        style={{float:'right'}}
      >X</button>
      <button 
        name="add"
        value={item}
        onClick={handleChangeInGroceryList}
        style={{float:'right'}}
      >Buy Now</button>
    </div>
  ));
  
  return (
    <div>
      <b>Need to Buy</b>
      {needToBuy}
    </div>
  ); 
};

export default GroceryNeedtoBuy;