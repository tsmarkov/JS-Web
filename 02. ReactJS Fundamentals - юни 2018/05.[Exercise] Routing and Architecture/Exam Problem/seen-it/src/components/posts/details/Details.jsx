import React, { Component } from 'react';

class Details extends Component {
    render = () => {
        return (
            <section id="viewComments">
                <DetailedPost />
                <CreateComment />
                <Comment />
            </section>
        );
    }
}

export default Details;
