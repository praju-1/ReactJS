import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2';

class Lifecycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'victor'
      }
      console.log("Lifecycle1 Constructor method..!");
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle1 getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle1 ComponentDidMount method..');
    }

    // updating life cycle method
    shouldComponentUpdate(){
        console.log("Lifecycle1 shouldcomponentupdate method");
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log("Lifecycle1 getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycle1 componentDidupdate method");
    }

    changeState=()=>{
        this.setState({
            name : 'Virat kohli'
        })
    }
  render() {
    console.log("Lifecycle1 Render Method..!");
    return (
      <div>Lifecycle1

        <Lifecycle2/>
        <button onClick={this.changeState} type='button'>Change update</button>
      </div>
    )
  }
}

export default Lifecycle1