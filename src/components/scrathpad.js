// import React, { Component } from "react";


// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     //create state object
//     //create a ref to store the textInput DOM element
//     //this.textInput = React.createRef();
//     // this.focusTextInput = this.focusTextInput.bind(this);
//     this.state = {
//       //set empty items array
//       newTodo: "",
//       items: [],
//     };
//     this.inputElement = (element) => {
//       this.textInput = element;
//     };

//     this.addItem = this.addItem.bind(this);
//     this.userInput = this.userInput.bind(this);
//   }
//   addItem(e) {
//     //focus the text input using raw dom API
//     //this.textInput.current.focus();
//     //console.log(this.inputElement.value);
//     if (this.state.newTodo !== "") {
//       //var n = new Date()
//       var newItem = {
//         text: this.state.newTodo,
//         key: new Date().getTime(),
//       };

//       this.setState((prevState) => {
//         return {
//           newTodo: "",
//           // using .concat to add new item to previous state
//           items: prevState.items.concat(newItem),
//         };
//       });
//       // this..value = "";
//     }
//     e.preventDefault();
//     //console.log(this.textInput);
//   }
//   componentDidUpdate() {
//     console.log(this.state.items);
//   }
//   userInput(e) {
//     console.log(e.target.value);
//     this.setState({
//       newTodo: e.target.value,
//     });
//   }
//   render() {
//     return (
//       //create input box
//       //add a button to submit
      
//       <div>
//       <div className="input-group mb-3 todoListMain">
//       <div className="form-controlheader">
//         <form onSubmit={this.addItem}>
//           {/* trickery from internet using ref */}
//           <input
//             value= {this.state.newTodo}
//             type="text"
//             onChange={this.userInput}
//             placeholder="enter task"
//           ></input>
//           <button className="btn btn-outline-primary" type="submit">Add</button>
//         </form>
//       </div>
//     </div>
  
//     <div className="input-group mb-6 col-4 text-center inv-amount-block">
//   <div className="input-group-append">
//     <button className="btn btn-outline-primary" type="submit">Add</button>
//   </div>
//   <input type="text" className="form-control" placeholder="Enter Task"></input>
// </div>
// </div>

//   )


      
     
    

//   }
// }

// export default TodoList;

// //Add items
// //display items
// //some style
// //remove items
// //possibly animate
// //need a function to list inputted values after hit add
// //map over items array and print the items
// //
// import React, { Component } from "react";
// import TodoItems from "./TodoItems";


// class TodoList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {//defining the state object int the constructor
//       newInput: "",
//       items: [],     //will store input in array 'items' that defines state
//       //fov: item => item
//   };
//   // this.inputElement= (element) =>{// binds props 'this' to additem funtion 'list' calls event handler
//   //   this.textInput = elelment;
//   // };
//   this.addItem = this.addItem.bind(this)
//   this.userInput = this.userInput.bind(this);

//   //localStorage.setItem('list')

//   }

//   addItem(e) {
//     if (this.state.newInput !== "") { //as long as the input feild is not empty
//       var newItem = {//creat new var called new item will store an object
//         text: this.state.newInput,//vale of text is defined by the input
//         key: new Date().getTime(),// objects unique is set by the time
//       };
//       this.setState((prevState) => {// gives set state the property of the previous state
//         return {
//           newInput:'',
          
//           items: prevState.items.concat(newItem) // and returns adds the old items to the array + the new items
//         };// return a new array 
//       });
//       // this.inputElement.value = "";
//     }
//     e.preventDefault();//prevent defaut reload

//   }
//   componentDidUpdate(){

//     console.log(this.state.items);
//   }

//   userInput(e) {
//     //console.log(e.target.value);
//     this.setState({
//       newInput: e.target.value,
//     });

//   }


//   render() {
//     return (
//       <div className="todoListMain">
//         <div className="header">
//           <form onSubmit={this.addItem}>
//             <input
//               value={this.state.newInput}
//               type='text'
//               onChange={this.userInput}
//               placeholder=" What would you like to do? ">
//             </input>
//             <button type="submit"> + </button>
//           </form>
//         </div>

//         <TodoItems entries={this.state.items} />
//       </div>
//     );
//   }
// }

// export default TodoList;




// componentDidUpdate() {
//   localStorage.setItem('list', JSON.stringify(this.state.list))
//   localStorage.setItem('complete', JSON.stringify(this.state.complete))
// }
// componentDidMount() {
//   if (localStorage.getItem('list') != null){
//     var todolist = JSON.parse(localStorage.getItem('list'));
//     this.setState({
//       list: todolist,
//     })
//   }
//   if (localStorage.getItem('complete') != null){
//     var completed = JSON.parse(localStorage.getItem('complete'));
//     this.setState({
//       complete: completed,
//     })
//   }
// }


// .filter(
//     todoEntry=>todoEntry.isCompleted!==true)

//key = {item.key}>

// checked = {item.checked}