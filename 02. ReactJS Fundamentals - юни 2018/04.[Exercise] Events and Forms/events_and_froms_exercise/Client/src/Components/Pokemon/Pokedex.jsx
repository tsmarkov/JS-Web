import React, { Component } from 'react'
import Creator from './Creator';
import Pokemons from './Pokemons';

class Pokedex extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.newPokemon = this.newPokemon.bind(this)
    }

    newPokemon() {
        this.setState({})
    }

    render = () => {
        return (
            <div>
                <Creator newPok={this.newPokemon} />
                <Pokemons />
            </div>
        )
    }
}

export default Pokedex
