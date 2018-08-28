import React from 'react';

const GroceryInMyCart = ({ purchasedList, handleRemove } ) => {
  const purchased = purchasedList.map((item) => (
    <li key={item}>
      {item}
      <button 
        value={item}
        onClick={handleRemove}
      >Remove</button>
    </li>
  ));

  return (
    <div>
      In My Cart
      {purchased}  
    </div>
  ) 
};

export default GroceryInMyCart;