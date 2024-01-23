import React from 'react'

function ArgumentinEvent() {
    const clickHandler = (a, b)=>{
        alert(b.type)
    }
  return (
    <>
    <div>Argument in Event</div>
    <button onClick={(event)=> clickHandler("MERN", event)}>Our course is</button>
    </>
  )
}

export default ArgumentinEvent