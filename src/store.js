import { createStore } from "redux";
import axios from "axios";

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      performanceData: [],
    };
  }

  if(action.type === 'GET_DATA') {
    return {
      performanceData: action.payload,
    };
  }

  const newState = { ...currentState };
  return newState;
};

const store = createStore(reducer);
export default store;
