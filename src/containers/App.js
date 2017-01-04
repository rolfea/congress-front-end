import React, { Component } from 'react';
import StateListComponent from '../components/StateListComponent/StateListComponent';
import { Link } from 'react-router'
import '../containers/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import styled from 'styled-components'
injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedState: null}
  }

  handleChange = (event, index, value) => this.setState({selectedState: value});

  render() {
    const {selectedState} = this.state;

    return (
      <div className="App">
        <Title>You Work For Me</Title>
        <h3>Senate and House Contact Information</h3>
        <StateListComponent onHandleChange={this.handleChange} selectedState={selectedState}/>
        <Link to={`/house${selectedState ? "?state=" + selectedState : ""}`} activeClassName="active">House</Link>
        {' | '}
        <Link to={`/senate${selectedState ? "?state=" + selectedState : ""}`} activeClassName="active">Senate</Link>
        {this.props.children}
      </div>
    );
  }
}

// styling with styled components
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #243D6E;
`;


export default App;
