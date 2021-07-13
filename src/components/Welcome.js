import React from 'react';
import { connect } from 'react-redux'
import { LogOut } from './Logout'
import NavBar from './NavBar'

const Welcome = (props) => {
return (
  <div>
    <div className="header">
      <h1>E-BASEBALL</h1>
      <h2> The Marketplace for Baseball Trading Cards</h2>
      { props.loggedIn > 0 ? <LogOut/> : <NavBar/> }
    </div>
  </div>
  )
}

  const mapStateToProps = state => {
    return ({
      loggedIn: state.userReducer.id,
    })
  }

export default (connect(mapStateToProps)(Welcome));
