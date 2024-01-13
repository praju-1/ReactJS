import React from 'react'

function Persons(person) {
  return (
    <>
    <div>Persons</div>
    <h3>My name is {person.name}. I am {person.age} years old. My id is {person.id} and my course name is {person.course}</h3>
    </>
  )
}

export default Persons