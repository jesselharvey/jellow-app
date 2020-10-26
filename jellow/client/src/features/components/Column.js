import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { selectCards, selectColumns, fetchCards } from '../dashboard/dashboardSlice'
import { Card } from './Card'
import { DeleteListButton } from './Buttons'
import { CardInput } from './Inputs'

export function Column(props) {
  const columns = useSelector(selectColumns)
  const cards = useSelector(selectCards)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCards())
  }, [dispatch])

  // console.log(cards)
  let handleDragOver = (e) => {
    e.preventDefault()
    // e.stopPropagation()
  }

  let handleOnDrop = (e, col) => {
    e.preventDefault()
    // e.stopPropagation()
    let card = e.dataTransfer.getData('card')
    // columns.filter((column) => {
    //   if (column.id == card.id) {
    //     column.
    //   }
    // }) 
    console.log(card)
  }

  return (
    // <div id="columnContainer">
    //   {columns.map((column) => (
      // column.id === project.id ? 
      <div className="column" key={props.id}>
        <div>
          <h4>{props.title}</h4><br />
          <DeleteListButton column={props.column} />
        </div>
        <div onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleOnDrop(e)} className="innerColumn">
          {cards.map((card) => (
              card.columns_id === props.id ?
              <Card card={card} column={props.column} id={card.id} title={card.title} description={card.description} />
                // <div>
                //   <span content={card.content}>{card.content}</span>
                // </div> 
              :""
            ))}
        <CardInput column_id={props.id}/>
        </div>
      </div>
      // :""
    //   ))}
    // </div>
  )
}