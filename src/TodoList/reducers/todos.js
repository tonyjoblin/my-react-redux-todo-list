const initialState = {
  allTodos: [],
  byIds: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODO/ADD": {
      const nextId = state.allTodos.length + 1;
      const newTodo = {
        id: nextId,
        description: action.payload.description,
        completed: false
      };
      return {
        ...state,
        allTodos: [...state.allTodos, nextId],
        byIds: {
          ...state.byIds,
          [nextId]: newTodo
        }
      };
    }
    case "TODO/TOGGLE": {
      const { id } = action.payload;
      const todo = state.byIds[id];
      const newTodo = {
        ...todo,
        completed: !todo.completed
      };
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: newTodo
        }
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
