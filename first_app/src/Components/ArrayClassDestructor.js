import React, { Component } from 'react'

class ArrayClassDestructor extends Component {
    constructor(props) {
        super(props)

        this.color = ['Red', 'Green', 'Yellow'];

        [this.firstcolor, this.secondcolor, this.thirdcolor] = this.color;
    }
    render() {
        return (
            <>
                <div>THis is Array Destructor in class based</div>
                <h1>Firstcolor : {this.firstcolor}</h1>
                <h1>Secondcolor :  {this.secondcolor}</h1>
                <h1>Thirdcolor : {this.thirdcolor}</h1>
            </>
        )
    }
}

export default ArrayClassDestructor