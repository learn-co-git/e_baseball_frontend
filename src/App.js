import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './reducers/current'
import { clearCollection, fetchCollection } from './reducers/card'
import { fetchMarket, clearMarket } from './reducers/market'
import { Home } from './components/Home'
import LoginForm from './components/LoginForm'
import SignupForm from './components/Signup'
import Welcome from './components/Welcome'
import './App.css'
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";


class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchMarket()
  }

   removeItems() {
    if (this.props.loggedIn == null) {
      return (
        <div>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/login" component={LoginForm}/>
      <Route exact path="/signup" component={SignupForm}/>
      </div>
      )
    } else {
      return (
        <Redirect to="/home" />
      )
    }
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
      { loggedIn > 0 ? <Home/> : null }
      <Router>
        <Switch>
          { this.removeItems() }
          <Route exact path="/home" exact component={Home}/>
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
