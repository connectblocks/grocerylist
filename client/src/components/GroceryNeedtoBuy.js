import React from 'react';

const GroceryNeedtoBuy = ({groceryList, handlePurchase}) => {
  const needToBuy = groceryList.map((item) => (
    <div>
      <span key={item}>{item}</span>
      <button 
        value={item}
        onClick={handlePurchase}
        style={{float:'right'}}
      >Buy Now</button>
    </div>
  ));
  
  return (
    <div>
      <b>Need to Buy</b>
      {needToBuy}
    </div>
  ) 
};

export default GroceryNeedtoBuy;