import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from './client'
import { useDispatch } from 'react-redux'
import { createAction, createReducer, current } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('currentuser/fetchUser', async loginDetails => {
  const response = await client.post('http://localhost:3001/login', loginDetails)
  return response.payload
})

export function getCurrentUser() {
  return async dispatch => {

    try {
  const result = await fetch("http://127.0.0.1:3001/current")
  const data = await result.json()
    dispatch(checkUser(data))
    } catch (error) {
      console.log("Error")
    }
  }
}

 const initialState = {
  id: null,
  username: "",
  email: "",
  rating: ""
}

export const addCurrentUser = createAction('user/addCurrentUser')
export const clearCurrentUser = createAction('user/clearCurrentUser')
const checkUser = createAction('user/checkUser')

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCurrentUser, (state, action) => {
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.rating = action.payload.rating
    })
    .addCase(clearCurrentUser, (state, action) => {
      state.id = null
      state.username = ""
      state.email = ""
      state.rating = ""
    })
    .addCase(checkUser, (state, action) => {
      state.id = action.payload.payload.id
      state.username = action.payload.payload.username
      state.email = action.payload.payload.email
      state.rating = action.payload.payload.rating
    })
    .addDefaultCase((state) => state)
})
