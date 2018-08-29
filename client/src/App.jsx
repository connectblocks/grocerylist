import './style/style.css';
import React from 'react';
import GroceryInMyCart from './components/GroceryInMyCart';
import GroceryNeedtoBuy from './components/GroceryNeedtoBuy';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryItem: "",
      groceryList: [],
      purchasedList: []
    }
    this.handleAddtoList = this.handleAddtoList.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleRemove=this.handleRemove.bind(this);
  }

  handleAddtoList(event) {
    event.preventDefault();
    if(this.state.groceryList.indexOf(this.state.groceryItem) < 0 && this.state.purchasedList.indexOf(this.state.groceryItem) < 0)  {
       this.setState({
         groceryList: [ ...this.state.groceryList, this.state.groceryItem ],
         groceryItem: ''
       })
      alert(`${this.state.groceryItem} is added to the grocery list`);
    } else {
      alert(`${this.state.groceryItem} is already on your grocery list`);
    }
  }

  handlePurchase(event) {
    const newGroceryList = this.state.groceryList.slice();
    newGroceryList.splice( newGroceryList.indexOf(event.target.value), 1 );

    this.setState({
      purchasedList: [ ...this.state.purchasedList, event.target.value ],
      groceryList: newGroceryList
    });
  }

  handleRemove(event) {
    const newPurchasedList = this.state.purchasedList.slice();
    newPurchasedList.splice( newPurchasedList.indexOf(event.target.value), 1 );

    this.setState({
      groceryList: [ ...this.state.groceryList, event.target.value ],
      purchasedList: newPurchasedList
    });
  }

  render() {
    return (
    <div>
        <form>
          <label><b>Add an item to your grocery list:</b></label>
            <input 
              type="text" 
              value={this.state.groceryItem}
              onChange={(event) => (this.setState({groceryItem: event.target.value}))}
              />
          <button className="add" onClick={this.handleAddtoList}>Submit</button>
        </form>
      <div className="container"> 
        <div className="item">
          <GroceryNeedtoBuy groceryList={this.state.groceryList} handlePurchase={this.handlePurchase}/>
        </div>
        <div className="item">
          <GroceryInMyCart purchasedList={this.state.purchasedList} handleRemove={this.handleRemove}/>
        </div>
      </div>
    </div>
    )
  }
}

export default App;
