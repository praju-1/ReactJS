import React, { Component } from 'react'
class Errorhandling extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
        console.error('Error caught by error boundry', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. Please try again later</h1>
        }
        return (
            <div>{this.props.children}</div>
        )
    }
}

export default Errorhandling