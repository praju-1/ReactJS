import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log("----Regular component-----");
    return (
      <>
      <h2>Regcomponent.. My name is {this.props.name}</h2>
      </>
    )
  }
}

export default RegComp