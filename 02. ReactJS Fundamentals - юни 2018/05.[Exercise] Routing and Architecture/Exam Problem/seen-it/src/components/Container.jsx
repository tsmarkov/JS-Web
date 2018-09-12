import React, { Component } from 'react'

import Catalog from './catalog/Catalog';
import Submit from './posts/submit/Submit';
import Edit from './posts/edit/Edit';
import MyPosts from './posts/MyPosts';
import Comment from './posts/details/Comment';

class Container extends Component {
    render = () => {
        return (
            <div id="container">
                <Catalog />
                <Submit />
                <MyPosts />
                <Edit />
                <Comment />
            </div>
        )
    }
}

export default Container
