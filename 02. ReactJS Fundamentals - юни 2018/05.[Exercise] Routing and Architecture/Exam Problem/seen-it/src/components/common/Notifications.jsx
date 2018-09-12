import React, { Component } from 'react';
import observer from '../../infrastructure/observer';

const DEFAULT_STATE = {
    message: null,
    success: null,
    error: null,
    loading: null
}

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = DEFAULT_STATE

        // observer.subscribe(observer.events.notifications, this.showNotification)
    }

    showNotification = (data) => {
        let message = data.message
        let type = data.type

        this.setState({
            message: message,
            [type]: true
        })
    }

    hideNotification = () => {
        this.setState({ ...DEFAULT_STATE })
    }

    render = () => {
        let notificationId

        if (this.state.success) {
            notificationId = 'infoBox'
        } else if (this.state.loading) {
            notificationId = 'loadingBox'
        } else if (this.state.error) {
            notificationId = 'errorBox'
        } else {
            return null
        }

        return (
            <div id="notifications">
                <div id={notificationId} className="notification">
                    <span>{this.state.message}</span>
                </div>
            </div>
        )
    }
}

export default Notifications;
