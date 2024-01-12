import React from 'react'

function ArrayDestructor() {
     const color = ['Red', 'Green', 'Yellow']

     const [firstcolor, secondcolor, thirdcolor] = color
  return (
    <>
    <div>This is Array Destructuring in functional component</div>
    <h1>Firstcolor : {firstcolor}</h1>
    <h1>Secondcolor :  {secondcolor}</h1>
    <h1>Thirdcolor : {thirdcolor}</h1>
    </>
  )
}

export default ArrayDestructor