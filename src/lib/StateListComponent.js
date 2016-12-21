import React, { Component } from 'react';

export default class StateList extends Component {
  render() {
    return (
      <div>
        <select>
          // loop through states array
          <option>Test 1</option>
          <option>Test 2</option>
          <option>Test 3</option>
        </select>
      </div>
    )
  }
}
