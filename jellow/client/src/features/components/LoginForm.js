import React from 'react'
import { LoginFail } from './LoginFail'
import { LoginButton, RegisterButton } from './Buttons'


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
          <LoginButton />
          <RegisterButton />
      </form>
    </div>
  )
}