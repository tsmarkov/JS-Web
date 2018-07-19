import React from 'react';

import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROOSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            details: {
                name: null,
                id: null,
                url: null,
                bio: null
            }
        }
    }

    fetchRoster = () => {
        fetcher.get(ROOSTER_ENPOINT, (roster) => {
            this.state({
                images: roster.map(i => ({
                    id: i.id,
                    url: i.url
                }))
            })
        })
    }

    componentDidMount = () => this.fetchRoster()

    render = () => (
        <div>
            <Rooster images={this.state.images} />
            <Details {...this.state.details} />
        </div>
    )
}