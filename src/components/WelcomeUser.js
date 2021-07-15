import React from 'react';
import { connect } from 'react-redux'
import { LogOut } from './Logout'

const WelcomeUser = (props) => {
return (
  <div>
    <div className="header">
      <h1>E-BASEBALL</h1>
      <h2>A Marketplace for Baseball Trading Cards</h2>
      <LogOut/>
    </div>
  </div>
  )
}

  const mapStateToProps = state => {
    return ({
      loggedIn: state.userReducer.id,
    })
  }

export default (connect(mapStateToProps)(WelcomeUser));
