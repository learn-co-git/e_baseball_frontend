import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from './client'

export const fetchUser = createAsyncThunk('currentuser/fetchUser', async loginDetails => {
  const response = await client.post('http://localhost:3001/login', loginDetails)
  return response.user
})

export const currentuser = createSlice({
  name: 'currentuser',
  initialState: {
    id: null,
    username: "",
    email: "",
    rating: ""
  },
  reducers: {
    addCurrentUser: (state, action) => {
      state.id = action.payload.id;
      state.username += action.payload.username;
      state.email += action.payload.email;
      state.rating += action.payload.rating;
    },
    clearCurrentUser: (state) => {
      state.id = null;
      state.username = "";
      state.email = "";
      state.rating = "";
    },
    extraReducers: {
      [fetchUser.fulfilled]: (state, action) => {
        return action.payload
      }
    }
  }
})

export const { addCurrentUser, clearCurrentUser } = currentuser.actions;

export default currentuser.reducer;
