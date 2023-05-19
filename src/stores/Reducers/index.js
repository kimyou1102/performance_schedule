import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { performanceReducer } from "./performanceReducer";
import { artistReducer } from "./artistReducer";
import { userReducer } from "./userReducer";

const persistConfig = {
  key: "userInfo",
  storage: storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  performances: performanceReducer,
  artists: artistReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
