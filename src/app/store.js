import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../reducers/current'
import { collectionReducer } from '../reducers/card'
import { marketReducer } from '../reducers/market'
import { newcardReducer } from '../reducers/newcard'

export const store = configureStore({
  reducer: {
    userReducer,
    collectionReducer,
    marketReducer,
    newcardReducer,
  }
},   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
