import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AddListButton, AddCardButton } from './Buttons'
import { fetchColumns, fetchCards } from '../dashboard/dashboardSlice'


export function ColumnInput() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  function handleAddColumn(e) {
    e.preventDefault()
    dispatch(fetchColumns())
    // console.log(text)
    setText('')
  }

  return (
    <form onSubmit={(e) => {handleAddColumn(e)}} className="columnInputForm">
      <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
      <AddListButton columnTitle={text}/>
    </form>
  )
}

export function CardInput(props) {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  // useEffect(() => {
  //   dispatch(fetchCards())
  // })

  function handleAddCard(e) {
    e.preventDefault()
    dispatch(fetchCards())
    setText('')
  }

  return (
    <form onSubmit={(e) => handleAddCard(e)} className="cardInputForm">
      <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
      <AddCardButton column_id={props.column_id} cardTitle={text} />
    </form>
  )
}