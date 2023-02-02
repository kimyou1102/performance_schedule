import { createStore, combineReducers } from "redux";
import { getData } from "./dataAction";


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

  if(action.type === 'ARTIST_FILTER') {
    console.log(action.payload);
    const {currentPerformanceData, selectArtists} = action.payload;

    return {
      performanceData: currentPerformanceData.filter((e) => selectArtists.includes(e.artist)),
    }
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
