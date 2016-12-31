import React, { Component } from 'react';
import StateListComponent from '../components/StateListComponent/StateListComponent';
// import Location from "../components/Location/Location";
import { Link } from 'react-router'
import '../containers/App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
        <h1>Senate and House Contact Information</h1>
        <StateListComponent onHandleChange={this.handleChange} selectedState={selectedState}/>
        <Link to={`/house${selectedState ? "?state=" + selectedState : ""}`} activeClassName="active">House</Link>
        {' | '}
        <Link to={`/senate${selectedState ? "?state=" + selectedState : ""}`} activeClassName="active">Senate</Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
