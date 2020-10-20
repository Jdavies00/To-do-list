import React, { Component } from "react";
import TodoItems from "./TodoItems"


class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {//defining the state object int the constructor
      items :[]     //will store input in array 'items' that defines state

    };

    this.addItem = this.addItem.bind(this);// binds props 'this' to additem funtion 'list' calls event handler
  }

  addItem(e){ 
    if (this._inputElement.value !== ""){ //as long as the input feild is not empty
        var newItem = {//creat new var called new item will store an object
          text: this._inputElement.value,//vale of text is defined by the input
          key :  Date.now()// objects unique is set by the time
        };
        this.setState((prevState) => {// gives set state the property of the previous state
          return{
            items : prevState.items.concat(newItem) // and returns adds the old items to the array + the new items
          };// return a new array 
        });
      this._inputElement.value = "";
    }
    console.log(this.state.items);
    e.preventDefault();//prevent defaut reload
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        {/* dont need to listen for an event b/c button has a type attribute set to submit */}
          <form onSubmit = {this.addItem}>
            <input ref={(a) => this._inputElement = a}           
                  placeholder=" What would you like to do? ">                  {/* clicking on the button whose type is submit is the equivalent of the submit event on the form being fired. */}
            </input>
            <button type="submit"> + </button> 
          </form>
        </div>
        
        <TodoItems entries = {this.state.items} /> {/* new property to in todolist render passes items array as a property */}
      </div>
    );
  }
}
 
export default TodoList;

