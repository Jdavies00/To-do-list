import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {//defining the state object int the constructor
      newInput: "",
      items: [],     //will store input in array 'items' that defines state
  };
  // this.inputElement= (element) =>{// binds props 'this' to additem funtion 'list' calls event handler
  //   this.textInput = elelment;
  // };
  this.addItem = this.addItem.bind(this)
  this.userInput = this.userInput.bind(this);

  }

  addItem(e) {
    if (this.state.newInput !== "") { //as long as the input feild is not empty
      var newItem = {//creat new var called new item will store an object
        text: this.state.newInput,//vale of text is defined by the input
        key: new Date().getTime(),// objects unique is set by the time
      };
      this.setState((prevState) => {// gives set state the property of the previous state
        return {
          newInput:'',
          
          items: prevState.items.concat(newItem) // and returns adds the old items to the array + the new items
        };// return a new array 
      });
      // this.inputElement.value = "";
    }
    e.preventDefault();//prevent defaut reload

  }
  componentDidUpdate(){
    console.log(this.state.items);
  }

  userInput(e) {
    console.log(e.target.value);
    this.setState({
      newInput: e.target.value,
    });

  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              value={this.state.newInput}
              type='text'
              onChange={this.userInput}
              placeholder=" What would you like to do? ">
            </input>
            <button type="submit"> + </button>
          </form>
        </div>

        <TodoItems entries={this.state.items} />
      </div>
    );
  }
}

export default TodoList;

