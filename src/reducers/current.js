import { createAction, createReducer } from '@reduxjs/toolkit'

export function fetchUser(loginDetails) {
  return async dispatch => {
    await fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
        },
      body: JSON.stringify(loginDetails)
      })
      .then(r => r.json())
      .then(response => {
        console.log(response)
          dispatch(addCurrentUser(response.data.attributes))
        })
        .catch(console.log())
    }
}

export function userCreate(loginDetails) {
  return async dispatch => {
  await fetch("http://127.0.0.1:3001/new", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(loginDetails)
  })
  .then(r => r.json())
  .then(response => {
      dispatch(addNewUser(response))
    })
    .catch(console.log)
  }
}


export function getCurrentUser() {
  return async dispatch => {
  await fetch("http://127.0.0.1:3001/current")
  .then(r => r.json())
  .then(response => {
    console.log(response)
    if (response.notice === "No Current User") {
      console.log(response.notice)
    } else {
      dispatch(addCurrentUser(response.data.attributes))
      }
    })
  }
}

export function userLogOut(id) {
  return async dispatch => {
    const userInfo = {
      user: id
    }
  await fetch("http://127.0.0.1:3001/logout", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
  .then(r => r.json())
  .then(response => {
    if (response.error) {
      alert(response.error)
    } else {
      dispatch(clearCurrentUser())
      }
    })
    .catch(console.log())
  }
}

 const initialState = {
  id: null,
  username: "",
  email: "",
  rating: ""
}

export const addNewUser = createAction('user/addNewUser')
export const currentId = createAction('user/currentId')
export const addCurrentUser = createAction('user/addCurrentUser')
export const clearCurrentUser = createAction('user/clearCurrentUser')
const checkUser = createAction('user/checkUser')

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addCurrentUser, (state, action) => {
      console.log(action.payload)
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
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.rating = action.payload.rating
    })
    .addCase(addNewUser, (state, action) => {
      console.log(action.payload)
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.rating = action.payload.rating
    })
    .addCase(currentId, (state) => {
      return state.id
    })
    .addDefaultCase((state) => state)
})
