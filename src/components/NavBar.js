import React from 'react';
import { Link } from "react-router-dom";
import '../css/card.css'

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/login">Login</Link><br></br>
      <Link to="/signup" >Signup</Link>
    </div>
      )
  }

export default (NavBar)
