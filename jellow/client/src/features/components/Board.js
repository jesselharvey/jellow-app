import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectColumns, selectCards } from '../dashboard/dashboardSlice'
import { Column } from '../components/Column'
import { 
AddListButton,
ConfAddListButton,
AddCardButton,
ConfAddCardButton
} from '../components/Buttons'
import { CardInput } from '../components/Inputs'


export  function Board() {

  // const dispatch = useDispatch()
  const columns = useSelector(selectColumns)
  const cards = useSelector(selectCards)
  console.log(columns)
  console.log(cards)
  return (
    <div id="boardContainer">
      {/* <Column /> */}
       {columns.map((column) => (
         <Column column={column} id={column.id} title={column.title}/>
      // <div className="column" key={column.id}>
      //     <h4>{column.title}</h4><br />
      //     {cards.map((card) => (
      //       card.column_id === column.id ?
      //       <div>
      //         <span>{card.content}</span>
      //       </div> :
      //       ""
      //     ))}
      //   </div>
      ))} 
      <CardInput />
    </div>
  )
}