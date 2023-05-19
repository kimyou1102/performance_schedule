const initalState = {
  user: [],
};

export const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        user: action.payload,
      };
    case "DELETE_USER":
      return {
        user: [],
      };
    default:
      return state;
  }
};
