import React, { Component } from 'react'

class MyPosts extends Component {
    render = () => {
        return (
            <section id="viewMyPosts">
                <div class="post post-content">
                    <h1>Your Posts</h1>
                </div>
                <div class="posts">
                    <Post />
                </div>
            </section>
        )
    }
}

export default MyPosts