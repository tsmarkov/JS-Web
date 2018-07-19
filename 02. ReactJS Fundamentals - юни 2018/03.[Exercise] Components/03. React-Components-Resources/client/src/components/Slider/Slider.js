import React from 'react';
import fetcher from '../../fetcher';

const IMAGE_URL = '/episodePreview/';

export default class Slider extends React.Component {
    constructor (props) {
        super(props) 
        
        this.state = {
            id: null,
            url: null
        }

        this.previousEpisode = this.previousEpisode.bind(this)
        this.nextEpisode = this.nextEpisode.bind(this)
    }

    getEpisodeById(id) {
        fetcher.get(IMAGE_URL + id, (episode) => {
             this.setState({...episode})
        })
    }

    componentDidMount() {
        this.getEpisodeById(0)
    }

    previousEpisode() {
        let newID = this.state.id - 1
        let episode = this.getEpisodeById(newID)

        this.setState({...episode})
    }

    nextEpisode() {
        let newID = this.state.id + 1
        let episode = this.getEpisodeById(newID)

        this.setState({...episode})
    }

    render = () => (
            <section id="slider">
                <img className="button" src="../left.png" title="previous" alt="nav"  onClick={this.previousEpisode}/>
                <div className="image-container">
                    <img src={this.state.url} alt="episode" />
                </div>
                <img className="button" src="../right.png" title="previous" alt="nav" onClick={this.nextEpisode}/>
            </section>
        );
}