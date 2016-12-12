import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SenateData} from './lib/components/SenateData.js';

class App extends Component {

  // SenateData in componentDidMount
  // SenateData().then((res) => thisSetState({ data: res }));

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Congress Front End</h2>
        </div>
        <p className="App-intro">
          <SenateData />
        </p>
      </div>
    );
  }
}

export default App;
