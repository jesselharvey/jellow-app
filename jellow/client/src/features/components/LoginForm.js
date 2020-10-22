import React from 'react'
import { LoginFail } from './LoginFail'

export function LoginForm() {

  const authentication = true

  return (
    <div>
      <h3>Log in to Jellow</h3>
      <form>
        {authentication === false ? 
        <LoginFail /> :
        ""}
        <label htmlFor="username">Username</label>
          <input type="text" name="username"></input>
        <label htmlFor="password">Password</label>
          <input type="password" name="password"></input>
      </form>
    </div>
  )
}