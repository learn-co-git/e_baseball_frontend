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
