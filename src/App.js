import React from 'react';
import { connect } from 'react-redux'
import { LoginSignup } from './components/LoginSignup'
import { getCurrentUser } from './reducers/current'
import { clearCollection, fetchCollection } from './reducers/card'
import { fetchMarket, clearMarket } from './reducers/market'
import { useDispatch, useStore } from 'react-redux'
import { Home } from './components/Home'
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/Signup'
import { LogOut } from './components/Logout'
import './App.css'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Market from './components/Market'


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchMarket()
  }

  render(){
    { this.props.fetchMarket() }
    const { loggedIn } = this.props
    { if (loggedIn != null) {
      this.props.fetchCollection()
      }
    }
    return (
      <div>
      <div className="header">
        <h1>E-Baseball</h1>
        <h2>A marketplace for baseball trading cards</h2>
        { loggedIn > 0 ? <LogOut/> : null }
      </div>
      { loggedIn > 0 ? <Home/> : <LoginForm/> }
    </div>
  )
  }
}
const mapStateToProps = state => {
  return ({
    loggedIn: state.userReducer.id,
  })
}

const mapDispatchToProps = dispatch => {
  return {
    clearCollection: () => {
      dispatch(clearCollection())
    },
    fetchCollection: () => {
      dispatch(fetchCollection())
    },
    getCurrentUser: () => {
      dispatch(getCurrentUser())
    },
    fetchMarket: () => {
      dispatch(fetchMarket())
    },
    clearMarket: () => {
      dispatch(clearMarket())
    }
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
