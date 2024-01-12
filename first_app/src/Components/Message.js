import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state = {
            msg : "Welcome to JavaScript"
        }
    }
    changeMsg(){
        this.setState({
            msg : 'React Js is JS Library'
        })
    }
  render() {
    return (
        <>
      <h1>{this.state.msg}</h1>
      <button onClick={()=>this.changeMsg()}>Change</button>
      </>
    )
  }
}

export default Message