import React from 'react';

const GroceryNeedtoBuy = ({groceryList, handlePurchase}) =>{
  const needToBuy = groceryList.map((item) => (
    <li key={item}>
      {item}
      <button 
        value={item}
        onClick={handlePurchase}
      >Buy Now</button>
    </li>
  ));
  
  return (
    <div>
      Need to Buy
      <ul>{needToBuy}</ul>
    </div>
  ) 
};

export default GroceryNeedtoBuy;