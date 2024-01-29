import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserID: '',
            title: " ",
            body: ' '
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {

        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log("Something went wrong...");
            })

    }
    render() {
        const { UserID, title, body } = this.state

        return (
            <>
                <div>PostForm</div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>UserID ::</label>
                        <input type='text' name='UserID' value={UserID} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Title ::</label>
                        <input type='text' name='title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Body ::</label>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} />

                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </>
        )
    }
}

export default PostForm