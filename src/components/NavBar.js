import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/card.css'
import LoginForm from './LoginForm'
import SignupForm from './Signup'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink exact activeClassName="active" to="/login">Login</NavLink><br></br>
      <NavLink exact activeClassName="active" to="/signup" >Signup</NavLink>
    </div>
      )
  }

export default (NavBar)
