import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './Components/Timer'
import Button from './Components/Button'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer />
        </header>
        <Button />
      </div>
    )
  }
}

export default App
