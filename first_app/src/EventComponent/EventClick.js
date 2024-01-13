import React from 'react'

function EventClick() {
    function clickHandler(){
        console.log("User clicked on button");
    }
  return (
    <>
    <div>EventClick</div>
    <button onClick={clickHandler}>Click Me</button>
    </>
  )
}

export default EventClick