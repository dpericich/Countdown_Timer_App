import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch.js'
import Countdown from './Countdown.js'

class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="App-title">Timers: Countdown and Stopwatch</div>
      <div className="Timers">
        <Stopwatch />
        <Countdown />
      </div>
    </div>

    );
  }
}
export default App;
