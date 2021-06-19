import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCurrentUser, fetchUser } from '../reducers/current'
import { unwrapResult } from '@reduxjs/toolkit'

export const SignupForm = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPassword2Change = e => setPassword2(e.target.value)

  return (
    <section>
      <h2>Signup</h2>
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
          />
        <br/>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onEmailChange}
          />
        <br/>
        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onPasswordChange}
          />
        <br/>
        <label>Re-Enter Password: </label>
        <input
          type="text"
          name="password2"
          value={password2}
          onChange={onPassword2Change}
          />
      </form>
    </section>
  )
}
