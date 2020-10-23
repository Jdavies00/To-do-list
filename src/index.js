import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './components/TodoList'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// var destination = document.querySelector("#root");


ReactDOM.render(
  <div>
    <TodoList />
  </div>,
  document.getElementById('root')
  );
  

// serviceWorker.unregister();
