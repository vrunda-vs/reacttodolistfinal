import React, { useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { edittodo, toggleTodo } from "../reduxstore/actions";
import { deleteTodo } from "../reduxstore/actions";

import Button from '@material-ui/core/Button'
import { TextField } from "material-ui";

let val="";
const handlesubmit=value=>{
   val=value;
  console.log(value)
}

const Todo = ({ todo, toggleTodo,deleteTodo,edittodo }) => (
  
  <li className="todo-item" >
   
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      
      <input type="text" onChange={(e)=>{handlesubmit(e.target.value);todo.value=e.target.value}} defaultValue={todo.value}/>
       {todo && todo.completed ? "  finish" : " active"}{" "}      
        <Button  variant="contained"  color="primary" onClick={() => toggleTodo(todo.id)}>
                           iscomplete
                        </Button> <Button  variant="contained"  color="primary" onClick={() => edittodo(todo.id,val)}>
                           Edit
                        </Button>
                        <Button  variant="contained"  color="primary" onClick={() => deleteTodo(todo.id)}>
                           Delete
                        </Button>
     
    </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  {edittodo,deleteTodo,toggleTodo}
)(Todo);
