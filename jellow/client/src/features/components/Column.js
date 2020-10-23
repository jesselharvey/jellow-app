import React from 'react'
import { useSelector } from 'react-redux'
import { selectColumns, selectCards } from '../dashboard/dashboardSlice'
import { Card } from './Card'

export function Column(props) {
  const columns = useSelector(selectColumns)
  const cards = useSelector(selectCards)

  return (
    // <div id="columnContainer">
    //   {columns.map((column) => (
      // column.id === project.id ? 
      <div className="column" key={props.id}>
        <h4>{props.title}</h4><br />
        {cards.map((card) => (
            card.column_id === props.id ?
            <Card id={card.id} content={card.content} />
              // <div>
              //   <span content={card.content}>{card.content}</span>
              // </div> 
            :""
          ))}
      </div>
      // :""
    //   ))}
    // </div>
  )
}