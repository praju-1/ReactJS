import React from 'react'
import myStyles  from '../Styles/myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? "primary" : " "
  return (
    <>
    <div>Stylesheet</div>
    <h1 className = {className}>Hello world..!</h1>
    </>
  )
}

export default Stylesheet