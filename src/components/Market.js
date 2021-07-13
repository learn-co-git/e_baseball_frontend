import React from 'react';
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { cardUpdate } from '../reducers/card'
import '../css/card.css'

const Market = props => {

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    const buyDetails = {
      id: event.target.id.value,
      user: event.target.user.value
    }
    dispatch(cardUpdate(buyDetails))
  }

  const buyButton = (x) => {
    return (<form onSubmit={handleSubmit}> <input type="hidden" name="id" value={x.id}/> <input type="hidden" name="user" value={props.logged}/>  <button className="button" type="submit">BUY</button></form>)
}

  const market = props.cards.map(x => (<div key={x.id}><section>{x.player_name}<br></br>{x.year}<br></br>{x.description}<p>Price...{x.price}</p><p>Sold Status...{x.sold_status}</p></section><br></br>
  <img className="img" src={x.url} alt={x.player_name}/><br></br>
  <br></br>{buyButton(x)}</div>))

  return market

}

const mapStateToProps = state => {
  return {
    cards: state.marketReducer[0],
    logged: state.userReducer.id
  }
}

export default connect(mapStateToProps)(Market)
