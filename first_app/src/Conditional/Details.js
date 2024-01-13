import React from 'react'
import Persons from './Persons';

function Details() {
    const persons = [{
        id : 11,
        name : 'John',
        age : 21,
        course : 'ReactJs'
    },
    {
        id : 12,
        name : 'victor',
        age : 20,
        course : 'Angular'
    },
    {
        id : 13,
        name : 'clark',
        age : 23,
        course : 'VueJs'
    }
];
const names = ['Ram', 'Ram', 'Sham', 'Virat','Ram', 'Ram', 'Sham', 'Virat']
const personList = persons.map(person =>(
    <Persons key = {person.id} person = {person} />
    
))
const namesList = names.map((name,index) => <h2 key = {index}>{name}</h2>)
  return (
    <>
    <div>
        {personList}
        {namesList}
    {/* <h3>{names[0]}</h3>
    <h3>{names[1]}</h3>
    <h3>{names[2]}</h3> */}
    </div>
    </>
  )
}

export default Details