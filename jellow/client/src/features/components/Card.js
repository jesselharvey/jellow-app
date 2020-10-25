import React from 'react'
// import { useSelector } from 'react-redux'
// import { selectCards, selectColumns } from '../dashboard/dashboardSlice'

export function Card(props) {
  // const cards = useSelector(selectCards)
  // const columns = useSelector(selectColumns)

  return (
    <div className="card" key={props.id}>
      {/* <span>{props.id}</span><br /> */}
      <span>{props.title}</span>
    </div>
      // {cards.map((card) => (
      //       // card.column_id === column.id ?
      //       <div>
      //         <span>{card.content}</span>
      //       </div> 
      //       // :""
      //     ))}

  )
}