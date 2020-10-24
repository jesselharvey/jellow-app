import React, { useState } from 'react'
import { AddListButton } from './Buttons'
import { addColumn } from '../dashboard/dashboardSlice'


export function CardInput() {
  const [text, setText] = useState('')

  function handleAddColumn(e) {
    e.preventDefault()
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