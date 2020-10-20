import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/TodoList'
// import App from './App';
import * as serviceWorker from './serviceWorker';

// var destination = document.querySelector("#root");


ReactDOM.render(
  <div>
    <TodoList/>
  </div>,
  document.getElementById('root')
  );
  

serviceWorker.unregister();
