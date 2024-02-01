import React, { Component } from 'react'

class Mycomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError : false,
        data : {}
      }
    }

    componentDidMount(){
        try {
            throw new Error ("Error in mycomponent")
        } catch (error) {
            this.setState({hasError : false})
            console.error('Error in my component :', error)
        }
    }
  render() {
    if(this.state.hasError)
    {
        return <div>
            Something went wrong in Mycomponent.Please Try again later
        </div>
    }
    return (
      <div>There is no error so welcome to my component</div>
    )
  }
}

export default Mycomponent