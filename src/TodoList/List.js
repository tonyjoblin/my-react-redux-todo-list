import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getAllTodos } from "./selectors";

const List = ({ todos = [] }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

export default connect(mapStateToProps, null)(List);
