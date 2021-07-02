import React from 'react';
import { connect } from 'react-redux'
import '../css/card.css'

export const Cards = props => {

  if (props.cards === undefined) {
    const NoCollection = <p>you currently have no cards in your collection</p>
    return NoCollection
  }

  const cards = props.cards.length > 0 ? props.cards.map(x => (<div key={x.id}><p>{x.player_name}</p><br>

  </br><img className="img" src={x.url} alt={x.player_name}/><br></br></div>)) : <p>No Collection</p>

  return cards
}

const mapStateToProps = state => {
  return {
    cards: state.collectionReducer[0]
  }
}

export default connect(mapStateToProps)(Cards)
