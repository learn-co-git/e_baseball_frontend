import React from 'react';
import './App.css';
import { LoginForm } from './components/LoginForm'
import { SignupForm } from './components/Signup'
import { getCurrentUser } from './reducers/current'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
    dispatch(getCurrentUser())



  return (
    <div>
      {<LoginForm/>}{<SignupForm/>}
      <section>
      </section>
    </div>
  )
}

export default App;
