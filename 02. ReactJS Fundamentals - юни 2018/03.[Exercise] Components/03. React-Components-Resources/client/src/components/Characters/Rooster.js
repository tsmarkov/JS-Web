import React from 'react';

export default class Rooster extends React.Component {
    render = () => {
        const images = this.props.images.map(i => (
            <div key={i.id}>
                <img src={i.url} alt="Character image" />
            </div>
        ))

        return (
            <section id="roster">
                {images}
            </section>
        )
    }
}