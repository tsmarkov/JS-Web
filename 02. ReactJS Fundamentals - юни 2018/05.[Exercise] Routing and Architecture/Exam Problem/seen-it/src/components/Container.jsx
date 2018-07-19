import React, { Component } from 'react'

class Container extends Component {
    render = () => {
        return (
            <div id="container">
                <Header />
                <Welcome />
                <Catalog />
                <Submit />
                <MyPosts />
                <Edit />
                <Comments />
                <Footer />
            </div>
        )
    }
}

export default Container
