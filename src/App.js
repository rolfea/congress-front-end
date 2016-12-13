import React, { Component } from 'react';
import './App.css';
import Senate from './Senate.js';

class App extends Component {

  // SenateData in componentDidMount
  // SenateData().then((res) => thisSetState({ data: res }));

  render() {
    return (
      <div className="App">
        <h1>Senate API Test</h1>
          <Senate />
        <hr />
      </div>
    );
  }
}

export default App;
