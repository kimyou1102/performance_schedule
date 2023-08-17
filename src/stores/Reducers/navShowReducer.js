const initalState = false;

export const navShowReducer = (state = initalState, action) => {
  switch (action.type) {
    case "VISIBLE":
      return true;
    case "INVISIBLE":
      return false;
    default:
      return state;
  }
};
