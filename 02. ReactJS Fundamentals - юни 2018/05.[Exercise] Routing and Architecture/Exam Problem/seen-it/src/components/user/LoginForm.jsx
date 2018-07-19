import React, { Component } from 'react'
import requester from '../../infrastructure/requester';
import observer from '../../infrastructure/observer';

class Login extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: null,
            password: null
        }
    }

    handleChange = (event) => {
        let fieldName = event.target.name
        let fieldValue = event.target.value

        this.setState({
            [fieldName]: fieldValue
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        requester.post('user', 'login', 'basic', this.state)
            .then((data) => {
                observer.trigger(observer.events.loginUser, data)
                sessionStorage.setItem('authtoken', data._kmd.authtoken)
            })
            .catch(console.error)
    }

    render = () => {
        return (
            <form id="loginForm" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.handleChange} />
                <label>Password:</label>
                <input name="password" type="password" onChange={this.handleChange} />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form>
        )
    }
}

export default Login