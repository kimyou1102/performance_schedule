import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { performanceReducer } from "./performanceReducer";
import { artistReducer } from "./artistReducer";
import { userReducer } from "./userReducer";
import { navShowReducer } from "./navShowReducer";

const persistConfig = {
  key: "userInfo",
  storage: storage,
  whitelist: ["userReducer"],
};

const rootReducer = combineReducers({
  performanceReducer,
  artistReducer,
  userReducer,
  navShowReducer
});

export default persistReducer(persistConfig, rootReducer);
