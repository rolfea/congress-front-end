import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';
import {fetchData} from './lib/components/Api.js';

class App extends Component {

  // fetchData in componentDidMount
  // create a componen list reps
  render() {
    fetchData();
    return (
      <div className="App">
        <h1>Senate and House Contact Information</h1>
        <Link to="/house" activeClassName="active">House</Link>
        {' | '}
        <Link to="/senate" activeClassName="active">Senate</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
