import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./actions";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li onClick={() => toggleTodo(todo.id)}>
      {todo.description} {todo.completed ? "Done" : "Not done"}
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
