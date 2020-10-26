import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectColumns, selectCards, fetchColumns } from '../dashboard/dashboardSlice'
import { Column } from '../components/Column'
import { NavBar } from '../components/Nav'
// import { 
// AddListButton,
// ConfAddListButton,
// AddCardButton,
// ConfAddCardButton
// } from '../components/Buttons'
import { ColumnInput } from '../components/Inputs'


export  function Board() {
  const columns = useSelector(selectColumns)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchColumns())
  }, [dispatch])

  // const dispatch = useDispatch()
  const cards = useSelector(selectCards)
  // console.log(cards)
  // console.log(columns)
  return (
    <div>
      <NavBar />
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
        <ColumnInput />
      </div>
    </div>
  )
}