import React, { Component } from 'react';
import './App.css';
import Songsterr from './Songsterr.js';

class App extends Component {
  render () {
    return (
      <div>
        <Songsterr username='Nirvana'></Songsterr>
      </div>
    )
  }
}

export default App;
