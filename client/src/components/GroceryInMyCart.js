import React from 'react';

const GroceryInMyCart = ({ purchasedList, handleInCartRemove }) => {
  const purchased = purchasedList.map((item) => (
    <div key={item}> 
      <span >{item}</span>
      <button className="remove" 
        value={item}
        onClick={handleInCartRemove}
        style={{float:'right'}}
      >Remove</button>
    </div>
  ));

  return (
    <div>
      <b>In My Cart</b>
      {purchased}
    </div>
  ) 
};

export default GroceryInMyCart;