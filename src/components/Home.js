import React from 'react';
import Cards from './Cards'
import Market from './Market'
import WelcomeUser from './WelcomeUser'
import SellCard from './SellCard'
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

export class Home extends React.Component {

  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Redirect to="/home"/>
            <Route exact path="/home" component={Home}/>
          </Switch>
        </Router>
        <WelcomeUser/>
        <div>
          <div>
            <h2>Market Place</h2>
            <Market/>
            </div>
          <div className="store">
            <h2>Your Store</h2>
          <Cards/>
          <SellCard/>
          </div>
        </div>
          <footer>
          </footer>
        </div>
      )
    }
  }
