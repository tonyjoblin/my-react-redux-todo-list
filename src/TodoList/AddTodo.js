import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
