import React, { Component } from 'react'
import { dispatch } from 'react-redux'
import { addColumn, addCard } from '../dashboard/dashboardSlice'

export function LoginButton() {
  return (
    <button id="loginButton">Log In</button>
  )
}

export function RegisterButton() {
  return (
    <button id="registerButton">Register</button>
  )
}

export function LogoutButton() {
  return (
    <button id="logoutButton">Log Out</button>
  )
}

// export function AddListButton() {
//   return (
//     <button className="addListButton">+ Add List</button>
//   )
// }

export class AddListButton extends React.Component {
  handleClick(e) {
    console.log('this is', this)
  }
  render() {
    return (
      <button onClick={(e) => this.handleClick(e)} className="addListButton">
        + Add List
      </button>
    )
  }
}

export function ConfAddListButton() {
  return (
    <button className="addListButton">+ Add List</button>
  )
}

export function AddCardButton() {
  return (
    <button className="addCardButton">Add button</button>
  )
}

export function ConfAddCardButton() {
  return (
    <button className="addCardButton">Add card</button>
  )
}