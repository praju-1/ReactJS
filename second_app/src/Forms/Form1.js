import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName : ' '
      }
    }

    handleUsernameChange = (event)=>{
      this.setState({
        UserName : event.target.value
      })
    }
  render() {
    return (
     <>
     <div>
     <label>UserName</label>
     <input type='text' value={this.state.UserName} onChange={this.handleUsernameChange}/>
     </div><br></br>

     <div>
      <label>Text Area : </label> 
      <textarea></textarea>
     </div>
     </>
    )
  }
}

export default Form1