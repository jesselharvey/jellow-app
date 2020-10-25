import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddListButton } from './Buttons'
import { fetchColumns } from '../dashboard/dashboardSlice'


export function ColumnInput() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  function handleAddColumn(e) {
    e.preventDefault()
    dispatch(fetchColumns())
    // console.log(text)
    setText("")
  }

  return (
    <form onSubmit={(e) => {handleAddColumn(e)}} className="inputForm">
      <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
      <AddListButton columnTitle={text}/>
    </form>
  )
}