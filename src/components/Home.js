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
          <section>
            <h2>Market Place</h2>
            <Market/>
            </section>
          <section>
            <h2>Your Store</h2>
            <SellCard/>
          <Cards/>
          </section>
        </div>
          <footer>
          </footer>
        </div>
      )
    }
  }
