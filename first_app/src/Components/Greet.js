import React from 'react'

function Greet(props) {
  const {name, courseName} = props
  console.log();
  
  return (
    <div>
      <h2>Hello {name}, your course is {courseName}</h2>
      {/* <h1>Hello my name is {props.name}, {props.skills}</h1>
      {props.children} */}
    </div>
  )
}

export default Greet
