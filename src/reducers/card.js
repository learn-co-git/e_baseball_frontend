import { createAction, createReducer } from '@reduxjs/toolkit'

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
})

export function fetchCollection() {
  return async dispatch => {
    try {
      const result = await fetch("http://127.0.0.1:3001/collection")
      const data = await result.json()
      dispatch(addCollection(data))
    } catch (error) {
      console.log("Error")
    }
  }
}

export function cardUpdate(buyDetails) {
  return async dispatch => {
  const response = await fetch("http://127.0.0.1:3001/buy", {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(buyDetails)
  })
  .then(r => r.json())
  .then(response => {
      console.log(response)
      dispatch(addCollection(response))
    })
    .catch(console.log)
  }
}
