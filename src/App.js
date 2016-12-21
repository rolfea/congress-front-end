import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

class App extends Component {
  render() {
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
