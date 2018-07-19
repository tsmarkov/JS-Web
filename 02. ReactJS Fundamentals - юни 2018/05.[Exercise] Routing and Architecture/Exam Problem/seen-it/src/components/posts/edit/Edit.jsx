import React, { Component } from 'react'
import EditArea from './EditArea';

class Edit extends Component {
    render = () => {
        return (
            <section id="viewEdit">
                <EditArea />
                <EditForm />
            </section>
        )
    }
}

export default Edit;