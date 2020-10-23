import React from 'react'
import { LogoutButton } from './Buttons'
import { useSelector } from 'react-redux'
import { selectUsers } from '../dashboard/dashboardSlice'

export function NavBar() {
  const users = useSelector(selectUsers)
  return (
    <div id="navBar">
      <span>Jellow</span>
      <div className="navUI">
        <LogoutButton />
        <img className="avatarThumb" src={users[2].img} /> 
      </div>
    </div>
  )
}