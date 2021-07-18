import React from 'react';
import NavBar from './NavBar'
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import LoginForm from './LoginForm'
import SignupForm from './Signup'


export const Welcome = () => {

return (
  <div>
    <div className="header">
      <img className="head" src="https://res.cloudinary.com/argustwo/image/upload/v1626590134/rhilewlap8q7btqf6b2n.jpg" alt="e-baseball-logo"/>
      <h2> The Marketplace for Baseball Trading Cards</h2>
      <Router>
        <Redirect to="/"/>
      <NavBar/>
        <Switch>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/signup" component={SignupForm}/>
          </Switch>
      </Router>
    </div>
    <div>

    </div>
  </div>
  )
}
