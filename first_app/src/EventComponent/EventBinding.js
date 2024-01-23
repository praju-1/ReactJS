import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
        super(props)

  this.state = {
        msg : 'Hello'
  }
  // this.clickHandler = this.clickHandler.bind(this);
}
clickHandler(){
    this.setState({
        msg : "This is React.Js 3rd way"
    })
    console.log(this);
}
// clickHandler= ()=> {
//   this.setState({
//     msg : 'This is reactjs 4th way using arrow function'
//   })
// }
  render() {
    return (
    <>
      <div>{this.state.msg}</div>
      <button onClick={this.clickHandler.bind(this)}>Click</button>
      {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
      {/* <button onClick={this.clickHandler}>Click</button> */}
      </>
    )
  }
}

export default EventBinding