import React, { Component } from 'react'

class Form1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         UserName : ' ',
         comments : ' ',
         graduation : 'BE'

      } 
    }

    handleUsernameChange = (event)=>{
      this.setState({
        UserName : event.target.value
      })
    }

    handleCommentChange = (event)=>{
      this.setState({
        comments : event.target.value
      })
    }

    handleGrade = (event)=>{
      this.setState({
        graduation: event.target.value
      })
    }

    handleSubmit= (event)=>{
      alert(`${this.state.UserName}.${this.state.comments}.${this.state.graduation}`)
      event.preventDefault()
    }
  render() {
    return (
     <>
     <form onSubmit={this.handleSubmit}>
     <div>
     <label>UserName</label>
     <input type='text' value={this.state.UserName} onChange={this.handleUsernameChange}/>
     </div><br></br>

     <div>
      <label>Text Area : </label> 
      <textarea type = "text" value={this.state.comments} onChange={this.handleCommentChange}></textarea>
     </div><br></br>

     {/* multiple choices */}

     <div>
      <label>Graduation :: </label>
      <select value={this.state.graduation} onChange={this.handleGrade}>
        <option value='BE'>BE</option>
        <option value='ME'>ME</option>
        <option value='MCS'>MCS</option>
        <option value='MCA'>MCA</option>
        <option value='MTech'>MTech</option>
        <option value='BTech'>BTech</option>
      </select>
     </div><br></br>

     <div>
      <button type='submit'>Submit</button>
     </div>
     </form>
     </>
    )
  }
}

export default Form1