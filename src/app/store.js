import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../reducers/current'
import { collectionReducer } from '../reducers/card'
import { marketReducer } from '../reducers/market'

export const store = configureStore({
  reducer: {
    userReducer,
    collectionReducer,
    marketReducer,
  }
},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
