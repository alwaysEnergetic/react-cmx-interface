import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import loginSlice from './loginSlice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "redux"; 

const reducers = combineReducers({
  auth: loginSlice,  
});
 
const persistConfig = {
    key: 'root',
    storage
};
 
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
