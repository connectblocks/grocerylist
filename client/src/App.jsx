import React from 'react';
import GroceryInMyCart from './components/GroceryInMyCart';
import GroceryNeedtoBuy from './components/GroceryNeedtoBuy';

class App extends React.Component {

  render() {
    return (
    <div>
      <GroceryNeedtoBuy />
    </div>
    )
  }
}
export default App;
