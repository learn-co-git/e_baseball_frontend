import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './reducers/current'
import { clearCollection, fetchCollection } from './reducers/card'
import { fetchMarket, clearMarket } from './reducers/market'
import { Welcome } from './components/Welcome'
import { Home } from './components/Home'
import './App.css'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchMarket()
  }

  render(){
    const { loggedIn } = this.props
    { if (loggedIn > 0) {
      this.props.fetchCollection()
      }
    }
    this.props.fetchMarket()
    return (
      <div>
      { loggedIn == null ? <Welcome/> : <Home/> }
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
    },
  };
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
