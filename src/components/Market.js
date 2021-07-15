import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { cardUpdate } from '../reducers/card'
import '../css/card.css'

const Market = props => {

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const buyDetails = {
      id: event.target.id.value,
      user: event.target.user.value
    }
    dispatch(cardUpdate(buyDetails))
  }

  const buyButton = (x) => {
    if (x.sold_status == false || x.sold_status == null) {
    return (<form onSubmit={handleSubmit}> <input type="hidden" name="id" value={x.id}/> <input type="hidden" name="user" value={props.logged}/>  <button className="button" type="submit">BUY</button></form>)
  } else {
    return (<p>This item has sold</p>)
  }
}

  const market = props.cards.map(x => (<div key={x.id}><section><p>{x.player_name}...{x.year}</p><p>({x.description})...Price${x.price}</p></section>
  <img className="img" src={x.url} alt={x.player_name}/>{buyButton(x)}<br></br></div>))

  return market

}

const mapStateToProps = state => {
  return {
    cards: state.marketReducer[0],
    logged: state.userReducer.id
  }
}

export default connect(mapStateToProps)(Market)
