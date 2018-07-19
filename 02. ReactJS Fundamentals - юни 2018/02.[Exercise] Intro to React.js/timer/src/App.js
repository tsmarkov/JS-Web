import React, { Component } from 'react';
import './App.css';
import rerender from './index'

let timer = new Date(Date.now());
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Timer: {timer.toLocaleTimeString()}</div>
        </header>
      </div>
    );
  }
}

setInterval(() => {
  timer = new Date(Date.now());
  rerender(<App />, document.getElementById('root'));
}, 1000)

export default App;
