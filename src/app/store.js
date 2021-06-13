import { configureStore } from '@reduxjs/toolkit';
import currentuserReducer from '../reducers/current'

export const store = configureStore({
  reducer: {
    currentuser: currentuserReducer,
  }
});
