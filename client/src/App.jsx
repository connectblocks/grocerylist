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
    this.handleChangeInGroceryList = this.handleChangeInGroceryList.bind(this);
    this.handleInCartRemove = this.handleInCartRemove.bind(this);
  }

  handleAddtoList(event) {
    event.preventDefault();
    if(this.state.groceryItem === '') {
      alert(`please enter the item`);
    } else if (this.state.groceryList.indexOf(this.state.groceryItem) < 0 && this.state.purchasedList.indexOf(this.state.groceryItem) < 0)  {
      this.setState({
        groceryList: [ ...this.state.groceryList, this.state.groceryItem ],
        groceryItem: ''
      })
    } else {
      alert(`${this.state.groceryItem} is already on your grocery list`);
    }
  }

  handleChangeInGroceryList(event) { 
    const newGroceryList = this.state.groceryList.slice();
    newGroceryList.splice( newGroceryList.indexOf(event.target.value), 1 );
    if(event.target.name === 'add') {
      this.setState({
        purchasedList: [ ...this.state.purchasedList, event.target.value ],
        groceryList: newGroceryList
      });
    } else if (event.target.name === 'remove') {
      this.setState({
        groceryList: newGroceryList
       });
    }
  }

  handleInCartRemove(event) {
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
            <div className="listTitle">Need to Buy</div>
            <GroceryNeedtoBuy groceryList={this.state.groceryList} handleChangeInGroceryList={this.handleChangeInGroceryList}/>
          </div>
          <div className="item">
            <div className="listTitle">In My Cart</div>
            <GroceryInMyCart purchasedList={this.state.purchasedList} handleInCartRemove={this.handleInCartRemove}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
