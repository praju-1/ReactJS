import React, { Component } from 'react'
import axios from 'axios'

class DeleteAxios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postTitle: '',
        }
    }


    handleChange = (event) => {
        this.setState({ postTitle: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${this.state.postTitle}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error deleting Post : ", error);
            })
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Post Title:
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteAxios