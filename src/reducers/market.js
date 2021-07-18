import { createAction, createReducer } from '@reduxjs/toolkit'

let initialState = []

export const marketSetup = createAction('market/marketSetup')

export const clearMarket = createAction('market/clearMarket')

export const marketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(marketSetup, (state, action) => {
      state = state.push(action.payload)
    })
    .addCase(clearMarket, (state, action) => {
      state = []
    })
})

export function fetchMarket() {
  return async dispatch => {
      await fetch("http://127.0.0.1:3001/market")
      .then(r => r.json())
      .then(response => {
      dispatch(marketSetup(response))
      })
      .catch (console.log)
    }
  }
