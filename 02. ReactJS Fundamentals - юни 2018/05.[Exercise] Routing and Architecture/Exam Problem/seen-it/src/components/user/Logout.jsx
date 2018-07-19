import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import requester from '../../infrastructure/requester';

class Logout extends Component {
    logout = () => {
        requester.post('user', '_logout', 'kinvey')
            .then(() => {
                console.log('6a sa logout-wam')
                sessionStorage.clear()
            })
            .catch(console.error)
    }

    render = () => {
        return <Redirect to='/' />
    }
}

export default Logout;
