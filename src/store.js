import { createStore, combineReducers } from "redux";
import axios from "axios";

const performanceReducer = (currentState, action) => {
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

const artistReducer = (currentState, action) => {
  if(currentState === undefined) {
    return {
      artists: [],
    }
  }

  if(action.type === 'GET_ARTIST') {
    return {
      artists: action.payload,
    }
  }

  const newState = { ...currentState };
  return newState;
}

const reducers = combineReducers({
  performances: performanceReducer,
  artists: artistReducer
})

const store = createStore(reducers);
export default store;
