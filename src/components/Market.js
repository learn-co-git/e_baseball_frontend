import React from 'react';
import { connect } from 'react-redux'
import '../css/card.css'
import { fetchMarket, getMarket } from '../reducers/market'

export const Market = props => {
  const market = props.cards.map(x => (<div key={x.id}><section>{x.player_name}<br></br>{x.year}<br></br>{x.description}<p>Price...{x.price}</p><p>Current Bid...{x.bid}</p><p>Sold Status...{x.sold_status}</p></section><br>
  </br><img className="img" src={x.url} alt={x.player_name}/></div>))
  return market

}

const mapStateToProps = state => {
  return {
    cards: state.marketReducer[0]
  }
}

export default connect(mapStateToProps)(Market)
