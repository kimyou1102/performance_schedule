import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const initalState = {
  user: []
};

const userReducer = (state = initalState, action) => {
  switch(action.type) {
    case 'REGISTER_USER': 
    return {
      user: action.payload
    };
    case 'DELETE_USER':
      return {
        user: []
      }
    default:
      return state;
  }
}

const persistConfig = {
  key: 'userInfo',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  performances: performanceReducer,
  artists: artistReducer,
  user: userReducer
})

// export const store = createStore(reducers);
export const persist = persistReducer(persistConfig, rootReducer)
export const store = createStore(persist);
export const persistor = persistStore(store);
// export default store;
