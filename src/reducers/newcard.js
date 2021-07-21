import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = []

export const newCard = createAction('newcard/newCard')

export const clearCard = createAction('newcard/clearCard')

export const newcardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newCard, (state, action) => {
      state = state.push(action.payload)
    })
    .addCase(clearCard, (state, action) => {
      state = []
    })
})
