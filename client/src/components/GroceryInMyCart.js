import React from 'react';

const GroceryInMyCart = ({ purchasedList, handleRemove }) => {
  const purchased = purchasedList.map((item) => (
    <div> 
      <span key={item}>{item}</span>
      <button className="remove" 
        value={item}
        onClick={handleRemove}
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