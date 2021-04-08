import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Todoapp from './Todoapp';
import Addtodo from './component/Addtodo';
import ListTodos from './component/ListTodos';
import VisibilityFilters from './component/VisibilityFilters';



function App() {
  return (
    <div className="App">
    <header className="">
    <h1>Todo List</h1>
    <Addtodo />
    <ListTodos />
    <VisibilityFilters />
    </header>
  </div>
  );
}

export default App;
