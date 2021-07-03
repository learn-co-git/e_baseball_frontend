import React from 'react';
import { connect } from 'react-redux'
import { LoginSignup } from './components/LoginSignup'
import { getCurrentUser } from './reducers/current'
import { clearCollection, fetchCollection } from './reducers/card'
import { fetchMarket, clearMarket } from './reducers/market'
import { useDispatch, useStore } from 'react-redux'
import { Home } from './components/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/Signup'
import { LogOut } from './components/Logout'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";


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
        { loggedIn > 0 ? <LogOut/> : <NavBar/> }
      </div>
      { loggedIn > 0 ? <Home/> : null }
      <Router>
        <Switch>
          <Route path="/login" exact component={LoginForm}/>
          <Route path="/signup" exact component={SignupForm}/>
          </Switch>
        </Router>
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
