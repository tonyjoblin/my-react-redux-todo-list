import React from "react";
import AddTodo from "./AddTodo";
import List from "./List";
import Filter from "./Filter";
import "./styles.css";

const TodoList = (props) => {
  return (
    <div>
      <h1>TODO List</h1>
      <AddTodo />
      <List />
      <Filter />
    </div>
  );
};

export default TodoList;
