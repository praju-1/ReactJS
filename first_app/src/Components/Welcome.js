import React, { Component } from 'react'

class Welcome extends Component {
  render(){
    const {name, courseName} = this.props;
    return (
      <div>This is Welcome component
        <h1>
            Hello my name is {name} and My course is {courseName}
        </h1>
      </div>
    )
  }
}

export default Welcome