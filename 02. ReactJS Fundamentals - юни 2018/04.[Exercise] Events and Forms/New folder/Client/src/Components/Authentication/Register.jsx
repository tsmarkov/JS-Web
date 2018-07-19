import React, { Component } from 'react'

class Register extends Component {
    register(event) {
        event.preventDefault()

        let email = event.target.email.value
        // let confirmEmail = event.target.confirmEmail.value
        let username = event.target.username.value
        let password = event.target.password.value
        // let confirmPassword = event.target.confirmPassword.value

        let data = {
            email: email,
            name: username,
            password: password
        }
        
        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(res => console.log(res))
        .catch(console.log)
    }

    render() {
        return (
            <div className="form">
                <form method="get" onSubmit={this.register}>
                    <div>
                        <h1>Sign up</h1>
                    </div>
                    <input name="email" type="email" placeholder="Email" /><br />
                    <br />
                    <input name="confirmEmail" type="email" placeholder="Confirm Email" /><br />
                    <br />
                    <input name="username" type="text" placeholder="Username" /><br />
                    <br />
                    <input name="password" type="password" placeholder="Password" /><br />
                    <br />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" /><br />
                    <br />
                    <input type="submit" value="Sign up" />
                </form>
            </div >
        )
    }
}

export default Register
