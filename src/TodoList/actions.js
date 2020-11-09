export const addTodo = (description) => ({
  type: "TODO/ADD",
  payload: { description }
});

export const toggleTodo = (id) => ({
  type: "TODO/TOGGLE",
  payload: { id }
});

export const setVisibility = (filter) => ({
  type: "VISIBILITY/SET",
  payload: { filter }
});
