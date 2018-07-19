import React, { Component } from 'react'

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