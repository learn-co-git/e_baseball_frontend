import React from 'react';
import { LoginSignup } from './components/LoginSignup'
import { getCurrentUser } from './reducers/current'
import { useDispatch, useStore } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const store = useStore()
    dispatch(getCurrentUser())

    const currentState = store.getState()

  return (
    <div>
      {<LoginSignup/>}
      <section>
      </section>
    </div>
  )
}

export default App;
