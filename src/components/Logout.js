import React from 'react';
import { userLogOut } from '../reducers/current'
import { clearCollection } from '../reducers/card'
import { useDispatch, useSelector } from 'react-redux'

export const LogOut = () => {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.userReducer.id)

  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        dispatch(userLogOut(id))
        dispatch(clearCollection())
      }
    }>
      <input type="submit" value="Log Out"/>
    </form>
  )
}
