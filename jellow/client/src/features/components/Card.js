import React from 'react'
import { useSelector } from 'react-redux'
import { selectCards, selectColumns } from '../dashboard/dashboardSlice'

export function Card(props) {
  const cards = useSelector(selectCards)
  const columns = useSelector(selectColumns)

  return (
    <div key={props.id}>
      {/* {cards.map((card) => (
            // card.column_id === column.id ?
            <div>
              <span>{card.content}</span>
            </div> 
            // :""
          ))} */}
          <span>{props.content}</span>
    </div>
  )
}