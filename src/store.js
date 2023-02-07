import { createStore, combineReducers } from "redux";

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
    const {currentPerformanceData, selectArtists} = action.payload;

    return {
      performanceData: currentPerformanceData.filter((e) => selectArtists.includes(e.artist)),
    }
  }

  const newState = { ...currentState };
  return newState;
};

const artistReducer = (currentState, action) => {
  // console.log(action.type);
  if(currentState === undefined) {
    return {
      artists: [],
    }
  }

  if(action.type === 'GET_ARTIST') {
    // console.log('겟 아티스트 : ', action.payload)
    return {
      artists: action.payload,
    }
  }

  if(action.type === 'DELETE_ARTIST') {
    return {
      artists : currentState.artists.filter((artist) => artist.id !== action.payload),
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
