import React, { Component } from 'react';
import './App.css';
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import Pokedex from './Components/Pokemon/Pokedex';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: false
    }

    this.log = this.log.bind(this)
    this.logout = this.logout.bind(this)
  }

  log() {
    this.setState({
      logged: true
    })
  }

  logout() {
    this.setState({
      logged: false
    })
  }

  render() {
    return (
      <div>
        {this.state.logged
          ? (
            <div>
              <a href="javascript:void(0)" onClick={this.logout}>Logout</a>
              <h1>Logged</h1>
              <Pokedex />
            </div>
          )
          : (<div className="App">
            <Login log={() => { this.log() }} />
            <Register />
          </div>)
        }
      </div>
    )
  }
}

export default App;
