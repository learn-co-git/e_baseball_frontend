import React from 'react';
import { connect } from 'react-redux'
import { LogOut } from './Logout'

export const WelcomeUser = (props) => {
return (
  <div>
    <div className="header">
      <img className="header" src="https://res.cloudinary.com/argustwo/image/upload/v1626590134/rhilewlap8q7btqf6b2n.jpg" alt="e-baseball-logo"/>
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
