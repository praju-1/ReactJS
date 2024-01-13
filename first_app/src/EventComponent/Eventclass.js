import React, { Component } from 'react'

class Eventclass extends Component {
    clickHandler(){
        console.log("This is class component event..!")
    }
  render() {
    return (
    <>
      <div>Eventclass</div>
      <button onClick={this.clickHandler}>Event</button>
      </>
    )
  }
}

export default Eventclass