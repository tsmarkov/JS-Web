import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            log: props.log
        }

        this.login = this.login.bind(this)
    }

    login(event) {
        event.preventDefault()

        let username = event.target.username.value
        let password = event.target.password.value

        const data = {
            email: username,
            password: password
        }

        let log = this.state.log

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(function(res) {
                log()
                return console.log(res)
            })
            .catch(console.error)
    }

    render() {
        return (
            <div className="form">
                <form method="post" onSubmit={this.login}>
                    <div>
                        <h1>Login form</h1>
                    </div>
                    <input name="username" type="text" placeholder="Username" /><br />
                    <br />
                    <input name="password" type="password" placeholder="Password" /><br />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div >
        )
    }
}

export default Login
