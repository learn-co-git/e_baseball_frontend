import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userCreate } from '../reducers/current'

const SignupForm = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onEmailChange = e => setEmail(e.target.value)
  const onPassword2Change = e => setPassword2(e.target.value)

  const createUser = () => {
    const loginDetails = {
      username: username,
      email: email,
      password: password
    }
    dispatch(userCreate(loginDetails))
       setUsername('')
       setPassword('')
       setEmail('')
       setPassword2('')
  }

  return (
    <section>
      <br></br>
      <h3>Signup</h3>
      <form className="sellcardDiv">
        <label>Username: </label>
        <input
          className="logoutInput"
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
          />

        <label>Email:     </label>
        <input
          className="logoutInput"
          type="text"
          name="email"
          value={email}
          onChange={onEmailChange}
          />
        <br/>
        <label>Password: </label>
        <input
          className="logoutInput"
          type="text"
          name="password"
          value={password}
          onChange={onPasswordChange}
          />

        <label>Re-Enter Password: </label>
        <input
          className="logoutInput"
          type="text"
          name="password2"
          value={password2}
          onChange={onPassword2Change}
          />
        <button className="button" type="button" onClick={createUser}>Create</button>
      </form>
    </section>
  )
}

export default SignupForm
