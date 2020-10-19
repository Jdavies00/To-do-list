import React, { Component } from "react";
 // generate input feild
class TodoList extends Component {
  constructor(props){
    super(props);
    //will store input in array 'items' that defines state
    this.state = {
      items :[]
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(e){

  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
        {/* dont need to listen for an event b/c button has a type attribute set to submit */}
          <form onSubmit = {this.addItem}>
          {/* refs to DOM to stor a referance to the input elelment property */}
          <input ref={(a) => this._inputElement = a} 
                  placeholder="enter task">
          </input>
            <button type="submit"> + </button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default TodoList;

