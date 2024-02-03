import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("This is pure component...");
    return (
      <>
      <h2>PureComponent... ! My name is {this.props.name}</h2>
      </>
    )
  }
}

export default PureComp