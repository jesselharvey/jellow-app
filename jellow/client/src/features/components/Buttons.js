import React from 'react'
import { useDispatch } from 'react-redux'
import { addColumn, removeColumn, removeCard, addCard, fetchColumns, fetchCards } from '../dashboard/dashboardSlice'
// import { addColumn } from './features/dashboard/dashboardSlice'

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

export function AddListButton(props) {
  const dispatch = useDispatch()
  let handleClick = (e) => {
    e.preventDefault()
    console.log(props.columnTitle)
    dispatch(addColumn(props.columnTitle))
    dispatch(fetchColumns())
    // console.log(e.target)
  }

  return (
    <button onClick={(e) => handleClick(e)} className="addListButton">
      + Add List
      </button>
  )
}

export function DeleteListButton(props) {
  const dispatch = useDispatch()
  let handleClick = (e) => {
    e.preventDefault()
    dispatch(removeColumn(props.column))
    console.log(props.column)
    dispatch(fetchColumns())
  }
  return (
    <button onClick={(e) => handleClick(e)} className="deleteListButton">
      Delete List
    </button>
  )
}

// export class AddListButton extends React.Component {
//   handleClick(e) {
//     console.log('this is', this)
//   }
//   render() {
//     return (
//       <button onClick={(e) => this.handleClick(e)} className="addListButton">
//         + Add List
//       </button>
//     )
//   }
// }

// export function ConfAddListButton() {
//   return (
//     <button className="addListButton">+ Add List</button>
//   )
// }

export function AddCardButton(props) {
  const dispatch = useDispatch()
  let handleClick = (e) => {
    e.preventDefault()
    console.log(props.title)
    dispatch(addCard(props.column_id, props.cardTitle))
    dispatch(fetchCards())
    // console.log(e.target)
  }

  return (
    <button onClick={(e) => handleClick(e)} className="addCardButton">
      Add Card
    </button>
  )
}

export function DeleteCardButton(props) {
  const dispatch = useDispatch()
  let handleClick = (e) => {
    e.preventDefault()
    dispatch(removeCard(props.card))
    console.log(props.card)
    dispatch(fetchCards())
  }
  return (
    <button onClick={(e) => handleClick(e)}className="deleteCardButton">
      Delete Card
    </button>
  )
}

// export function ConfAddCardButton() {
//   return (
//     <button className="addCardButton">Add card</button>
//   )
// }