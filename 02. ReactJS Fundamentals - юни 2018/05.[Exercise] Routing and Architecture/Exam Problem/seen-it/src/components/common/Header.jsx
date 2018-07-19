import React, { Component } from 'react'
import observer from '../../infrastructure/observer';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null
        }

        observer.subscribe(observer.events.loginUser, this.loginUser)
    }

    loginUser = (data) => {
        this.setState({
            username: data.username
        })
    }

    render = () => {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {this.state.username &&
                    <div id="profile">
                        <span>{this.state.username}</span>|
                        <a href="/logout">logout</a>
                    </div>
                }
            </header>
        )
    }
}

export default Header