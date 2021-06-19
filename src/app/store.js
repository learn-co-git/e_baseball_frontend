import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../reducers/current'

export const store = configureStore({
  reducer: {
    userReducer,
  }
},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
