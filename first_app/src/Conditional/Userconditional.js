import React, { Component } from 'react'

class Userconditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn : true
      }
    }
  render() {
    return this.state.logInn && <h2>Login successfull..!</h2>


    // return this.state.logInn ? (
    //     <h2>Ternary operator</h2>
    // ): (
    //     <h2>This is false value</h2>
    // )
    

    // let text;
    // if (this.state.logInn){
    //     text = <h2>User condition component..!</h2>
    // } else{
    //     text = <h2>Hello world..!</h2>
    // }
    // return(<h1>{text}</h1>)


    // if (this.state.logInn) {
    //     return (
    //         <div>Usercondition conponents</div>
    //     ) 
    // } else {
    //     return(
    //         <div>Hello world..!</div>
    //     )
    }
    // return (
    // <>
      
    //   <dive>Hello world..!</dive>
    // </>
    // )
  }


export default Userconditional