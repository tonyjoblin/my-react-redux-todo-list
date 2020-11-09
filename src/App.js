import React from "react";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import store from "./store";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}
