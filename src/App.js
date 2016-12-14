import React, { Component } from 'react';
import './App.css';
import Senate from './Senate.js';
import House from './House.js';
class App extends Component {

  // SenateData in componentDidMount
  // SenateData().then((res) => thisSetState({ data: res }));

  render() {
    return (
      <div className="App">
        <h1>House API Test</h1>
          <House />
        <hr />
      </div>
    );
  }
}

export default App;
