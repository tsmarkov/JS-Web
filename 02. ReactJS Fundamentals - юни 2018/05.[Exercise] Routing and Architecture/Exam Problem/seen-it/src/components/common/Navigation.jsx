import React, { Component } from 'react'

class Navigation extends Component {
    constructor(props) {
        super(props)
    }

    render = () => {
        return (
            <div id="menu">
                <div class="title">Navigation</div>
                <a class="nav" href="#">Catalog</a>
                <a class="nav" href="#">Submit Link</a>
                <a class="nav" href="#">My Posts</a>
            </div>
        )
    }
}

export default Navigation