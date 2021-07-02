import { useDispatch } from 'react-redux'
import { createAction, createReducer } from '@reduxjs/toolkit'

let initialState = []

export const marketSetup = createAction('market/marketSetup')

export const clearMarket = createAction('market/clearMarket')

export const getMarket = createAction('market/getMarket')

export const marketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(marketSetup, (state, action) => {
      state = state.push(action.payload)
    })
    .addCase(clearMarket, (state, action) => {
      state = []
    })
    .addCase(getMarket, (state, action) => {
      return state
    })
})

export function cardMarket() {
  return getMarket()
}

export function fetchMarket() {
  return async dispatch => {
    try {
      const result = await fetch("http://127.0.0.1:3001/market")
      const data = await result.json()
      dispatch(marketSetup(data))
    } catch (error) {
      console.log("fetchMarket error")
    }
  }
}
