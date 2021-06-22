import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from './client'
import { useDispatch } from 'react-redux'
import { createAction, createReducer, current } from '@reduxjs/toolkit'


const initialState = []

export const addCollection = createAction('collection/addCollection')
export const clearCollection = createAction('collection/clearCollection')

export const collectionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCollection, (state, action) => {
      state = state.push(action.payload)
    })
    .addCase(clearCollection, (state, action) => {
      state = []
    })
    .addDefaultCase((state) => state)
})
