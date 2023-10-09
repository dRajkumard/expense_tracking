import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or AsyncStorage for React Native

import rootReducer from "./redux/slice"; // Your combined reducers

const persistConfig = {
  key: "root", // The key to use for storage
  storage, // The storage engine
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Other store configuration options...
});

export const persistor = persistStore(store);
