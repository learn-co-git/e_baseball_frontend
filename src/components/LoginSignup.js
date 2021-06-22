import React from 'react';
import { LoginForm } from './LoginForm'
import { SignupForm } from './Signup'
import '../css/login.css'

export const LoginSignup = () => {
  return (
    <div>
      <section>
      {<LoginForm/>}
    </section>
    <p>or</p>
    <br/>
    <section>
      {<SignupForm/>}
    </section>
    </div>
  )
}
