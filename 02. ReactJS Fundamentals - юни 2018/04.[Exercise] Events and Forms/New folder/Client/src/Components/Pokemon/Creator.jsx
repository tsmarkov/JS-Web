import React, { Component } from 'react'

class Creator extends Component {
    constructor(props) {
        super(props)

        this.new = props.newPok

        this.state = {
            name: '',
            image: '',
            info: ''
        }

        this.handleCreate = this.handleCreate.bind(this)
        this.create = this.create.bind(this)
    }

    handleCreate(event) {
        event.preventDefault()

        let name = event.target.name.value
        let image = event.target.image.value
        let info = event.target.info.value

        this.setState({
            name: name,
            image: image,
            info: info
        })

        let data = {
            pokemonName: name,
            pokemonImg: image,
            pokemonInfo: info
        }

        this.create(data)

        let elements = document.querySelectorAll('input[type=text]')

        for (let el of elements) {
            el.value = ""
        }
    
        this.new()
    }

    create(data) {
        fetch('http://localhost:5000/pokedex/create', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(res => console.log(res))
            .catch(console.log)
    }

    componentDidMount() {
        console.log(this.props.newPok)
    }

    render() {
        return (
            <div className="form" id="create-form">
                <form method="get" onSubmit={this.handleCreate}>
                    <div>
                        <h1>Pokemon Creator</h1>
                    </div>
                    <input name="name" type="text" placeholder="Pokemon name" /><br />
                    <br />
                    <input name="image" type="text" placeholder="Pokemon image" /><br />
                    <br />
                    <input name="info" type="text" placeholder="Pokemon info" /><br />
                    <br />
                    <input type="submit" value="Create Pokemon" />
                </form>
            </div >
        )
    }
}

export default Creator
