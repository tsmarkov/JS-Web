import React, { Component } from 'react'

class Pokemons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pokemons: []
        }

        this.setPokemons = this.setPokemons.bind(this)
        this.getPokemons = this.getPokemons.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.renderPokemons = this.renderPokemons.bind(this)
    }

    setPokemons(pokemons) {
        console.log('setPokem');

        console.log(pokemons);

        this.setState({
            pokemons: pokemons.pokemonColection
        })
    }

    getPokemons() {
        fetch('http://localhost:5000/pokedex/pokedex', {
            method: 'GET'
        }).then(data => {
            return data.json()
        }).then((res) => {
            this.setPokemons(res)
            return console.log(res)
        }).catch(console.log)
    }

    componentDidMount() {
        this.getPokemons()
    }

    renderPokemons() {
        let pokemonsers = []
        if (this.state.pokemons.length > 0) {
            let pokemonsData = this.state.pokemons
            for (const currentPokemon of pokemonsData) {
                pokemonsers.push(
                    <div className="pokemon-div">
                        <p>{currentPokemon.pokemonName}</p>
                        <img src={currentPokemon.pokemonImg} alt={currentPokemon.pokemonName + '\'s image'}/>
                        <p>{currentPokemon.pokemonInfo}</p>
                    </div>)
            }
        }
        return pokemonsers
    }

    render = () => {
        return (
            <div>
                <h1>Pokemons</h1>
                {this.renderPokemons()}
            </div>
        )
    }
}

export default Pokemons
