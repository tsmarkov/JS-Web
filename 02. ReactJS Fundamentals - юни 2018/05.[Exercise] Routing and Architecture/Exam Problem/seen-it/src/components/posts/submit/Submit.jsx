import React, { Component } from 'react'
import SubmitArea from './SubmitArea';
import SubmitForm from './SubmitForm';

class Submit extends Comment {
    render = () => {
        return (
            <section id="viewSubmit">
                <SubmitArea />
                <SubmitForm />
            </section>
        )
    }
}

export default Submit