import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../css/login.css'
import { addCurrentUser, fetchUser } from '../reducers/current'
import { unwrapResult } from '@reduxjs/toolkit'

const LoginForm = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const saveLogin = async () => {
    const loginDetails = {
      username: username,
      password: password
    }
    try {
      const result = await dispatch(fetchUser(loginDetails))
      const user = unwrapResult(result)
      dispatch(addCurrentUser(user))
      }
      catch (err) {
         console.error('Failed to save the user: ', err)
       }
       setUsername('')
       setPassword('')
  }

  return (
    <section>
      <br></br>
      <h3>please login</h3>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
          />
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onPasswordChange}
          />
        <button type="button" onClick={saveLogin}>Login</button>
        </form>
      </section>
  )
}

export default LoginForm
