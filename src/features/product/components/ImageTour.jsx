import React from 'react'

export default function ImageTour({listImageTour}) {
  return (
    <div>{
      listImageTour.map((list)=>(
        <img  height="122" width="148" src={list.Link} />
      ))
      }</div>
  )
}
