import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         ParentName : 'John'
      }
      this.parentOne = this.parentOne.bind(this);
    }
    parentOne(childdata){
        alert(`Hello ${this.state.ParentName} from ${childdata}`)
    }
  render() {
    return (
      <div>
        <ChildComponent parentHandler = {this.parentOne} />
      </div>
    )
  } 
}

export default ParentComponent