import React, { Component } from 'react';

export default class StateList extends Component {
  render() {
    const testArray = ["WI", "IL", "CA"];
    function addStateListOptionElements(array) {
      for (var i = 0; i < array.length; i++) {
        // let stateOption = document.createElement("option");
        // stateOption.innerHTML = array[i];
        // console.log(stateOption);
        let stateOption = <option>{array[i]}</option>
        return stateOption;
      }
    }
    return (
      <div>
        <select>
        { addStateListOptionElements(testArray) }
        </select>
      </div>
    )
  }
}
