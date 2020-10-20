import React, { Component } from "react";


class TodoList extends Component {
  constructor(props) {
    super(props);
    //create state object
    //create a ref to store the textInput DOM element
    //this.textInput = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
    this.state = {
      //set empty items array
      newTodo: "",
      items: [],
    };
    this.inputElement = (element) => {
      this.textInput = element;
    };

    this.addItem = this.addItem.bind(this);
    this.userInput = this.userInput.bind(this);
  }
  addItem(e) {
    //focus the text input using raw dom API
    //this.textInput.current.focus();
    //console.log(this.inputElement.value);
    if (this.state.newTodo !== "") {
      //var n = new Date()
      var newItem = {
        text: this.state.newTodo,
        key: new Date().getTime(),
      };

      this.setState((prevState) => {
        return {
          newTodo: "",
          // using .concat to add new item to previous state
          items: prevState.items.concat(newItem),
        };
      });
      // this..value = "";
    }
    e.preventDefault();
    //console.log(this.textInput);
  }
  componentDidUpdate() {
    console.log(this.state.items);
  }
  userInput(e) {
    console.log(e.target.value);
    this.setState({
      newTodo: e.target.value,
    });
  }
  render() {
    return (
      //create input box
      //add a button to submit
      
      <div>
      <div className="input-group mb-3 todoListMain">
      <div className="form-controlheader">
        <form onSubmit={this.addItem}>
          {/* trickery from internet using ref */}
          <input
            value= {this.state.newTodo}
            type="text"
            onChange={this.userInput}
            placeholder="enter task"
          ></input>
          <button className="btn btn-outline-primary" type="submit">Add</button>
        </form>
      </div>
    </div>
  
    <div className="input-group mb-6 col-4 text-center inv-amount-block">
  <div className="input-group-append">
    <button className="btn btn-outline-primary" type="submit">Add</button>
  </div>
  <input type="text" className="form-control" placeholder="Enter Task"></input>
</div>
</div>

  )


      
     
    

  }
}

export default TodoList;

//Add items
//display items
//some style
//remove items
//possibly animate
//need a function to list inputted values after hit add
//map over items array and print the items
//
