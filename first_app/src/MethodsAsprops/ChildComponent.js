import React from 'react'

function ChildComponent(props) {
  return (
    <>
    <div>ChildComponent</div>
    <button onClick={props.parentHandler('ChildComponent')}>Click Me</button>
    </>
  )
}

export default ChildComponent