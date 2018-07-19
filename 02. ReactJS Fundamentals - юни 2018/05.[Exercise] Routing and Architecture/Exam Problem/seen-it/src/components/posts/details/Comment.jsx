import React, { Component } from 'react';

class Comment extends Component {
    render = () => {
        return (
            <article class="post post-content">
                <p>Beats React any day! So must easier and less boilerplate.</p>
                <div class="info">
                    submitted 3 days ago by Nakov | <a href="#" class="deleteLink">delete</a>
                </div>
            </article>
        );
    }
}

export default Comment;
