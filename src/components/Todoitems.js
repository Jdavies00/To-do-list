import React, { Component } from "react";

class  TodoItems extends Component {
    createTasks (item) {
        return <li key = {item.key} >{item.text}</li>//lisst item factory 
    }
    render (){
        var todoEntries = this.props.entries;// passing entries frmo todo list and making them 
        var listItems = todoEntries.map(this.createTasks);
    
    return (
    <ul className ="theList">
        {listItems}
    </ul>
    );
}

};
export default TodoItems;