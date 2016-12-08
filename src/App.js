import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchData} from './lib/components/Api.js';

class App extends Component {

  // fetchData in componentDidMount
  // create a componen list reps
  render() {
    fetchData();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Congress Frontend End</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
