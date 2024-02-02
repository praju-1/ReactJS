import React, { Component } from 'react'

class Unmounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //  initail state
      }
    }
    componentDidMount(){
        this.timerID = setInterval(()=>{
            console.log('Doing something...');
        }, 1000)
        this.componentIsMounted = true;;
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
        console.log('component is about to unmount...');
        this.componentIsMounted = false;
    }
  render() {
    return (
      <div>Unmounting Method</div>
    )
  }
}

export default Unmounting

