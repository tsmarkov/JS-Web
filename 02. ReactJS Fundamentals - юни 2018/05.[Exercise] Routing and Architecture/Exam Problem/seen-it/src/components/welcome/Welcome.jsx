import React, { Component } from 'react'
import Register from '../user/RegisterForm';
import Login from '../user/LoginForm';
import About from './About';

class Welcome extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render = () => {
        return (
            <section id="viewWelcome">
                <div className="welcome">
                    <div className="signup">
                        <Login />
                        <Register />
                    </div>

                    <About />
                </div>
            </section>
        )
    }
}

export default Welcome