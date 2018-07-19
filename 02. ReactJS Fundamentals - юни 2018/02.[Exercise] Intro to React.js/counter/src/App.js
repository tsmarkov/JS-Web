import React, { Component } from 'react';
import './App.css';
import rerender from './index'

let count = 0;
let incrementCounter = () => {
  count++;
  console.log(count)
  rerender(<App />, document.getElementById('root'))
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Count: {count}</div>
        </header>
        <button onClick={incrementCounter}>Click</button>
      </div>
    );
  }
}

export default App;
