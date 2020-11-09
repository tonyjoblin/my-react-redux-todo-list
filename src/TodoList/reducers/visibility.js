const initialState = {
  filter: "All"
};

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VISIBILITY/SET": {
      const { filter } = action.payload;
      return { ...state, filter };
    }
    default: {
      return state;
    }
  }
};

export default visibilityReducer;
