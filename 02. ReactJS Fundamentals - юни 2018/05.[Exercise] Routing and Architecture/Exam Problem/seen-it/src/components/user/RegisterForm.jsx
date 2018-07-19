import React, { Component } from 'react'
import observer from '../../infrastructure/observer';
import requester from '../../infrastructure/requester';

class Register extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: null,
            password: null,
            repeatPass: null
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

        requester.post('user', '', 'basic', this.state)
            .then((data) => {
                observer.trigger(observer.events.loginUser, data)
                sessionStorage.setItem('authtoken', data._kmd.authtoken)
            })
            .catch(console.error)
    }

    render = () => {
        return (
            <form id="registerForm" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.handleChange}/>
                <label>Password:</label>
                <input name="password" type="password" onChange={this.handleChange}/>
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" onChange={this.handleChange}/>
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )
    }
}

export default Register