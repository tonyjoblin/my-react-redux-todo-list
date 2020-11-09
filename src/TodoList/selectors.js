const getTodos = (state) =>
  state.todos.allTodos.map((id) => state.todos.byIds[id]);

export const getAllTodos = (state) => {
  const { filter } = state.visibility;
  switch (filter) {
    case "Done": {
      return getTodos(state).filter((todo) => todo.completed);
    }
    case "In progress": {
      return getTodos(state).filter((todo) => !todo.completed);
    }
    default: {
      return getTodos(state);
    }
  }
};

export const getVisibilityFilter = (state) => {
  return state.visibility.filter;
};
