import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../reduxstore/selectors";
import { VISIBILITY_FILTERS } from "../action";

const ListTodo = ({ todos }) => (
  <ul className="todo-list" style={{listStyleType:"none"}}>
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);



const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
  
};

export default connect(mapStateToProps)(ListTodo);
