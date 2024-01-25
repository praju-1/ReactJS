import React, { Component } from 'react'

class Lifecycle2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'victor'
      }
      console.log("Lifecycle2 Constructor method..!");
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle2 getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle2 ComponentDidMount method..');
    }

    // updating life cycle method
    shouldComponentUpdate(){
        console.log("Lifecycle2 shouldcomponentupdate method");
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("Lifecycle2 getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycle2 componentDidupdate method");
    }
  render() {
    console.log("Lifecycle2 Render Method..!");
    return (
      <div>Lifecycle2</div>
    )
  }
}

export default Lifecycle2