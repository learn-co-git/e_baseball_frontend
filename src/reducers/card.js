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
  console.log(buyDetails)
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
      alert("Success! Please check your email for payment details.")
      console.log(response)
      dispatch(addCollection(response))
    })
    .catch(console.log)
  }
}

export function addNewCard(cardDetails) {
  console.log(cardDetails)
  return async dispatch => {
  const response = await fetch("http://127.0.0.1:3001/newcard", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(cardDetails)
  })
  .then(r => r.json())
  .then(response => {
      alert("Success! Your card is now live.")
      console.log(response)
      dispatch(addCollection(response))
    })
    .catch(console.log)
  }
}
