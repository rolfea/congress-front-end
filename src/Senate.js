import { fromJS } from 'immutable'
import React, {Component} from 'react';
import {fetchSenatorData} from './lib/senators.js';

export default class Senate extends Component {
  constructor(props) {
    super(props);
    this.state = {senateData: {}}
  }

  componentDidMount() {
    fetchSenatorData().then((response) => this.setState({senateData: response}))
  }

  render () {
    // const 0 should be the data I want from the JSON objects
    // what methods can I use on this object to display data?
    // also, what can I do with the const xxx {x, y, z} syntax?
    const { senateData } = this.state
    const mappedSenators = fromJS(senateData);

    return (
      <div>
        { mappedSenators.map((senator, i) => (
          <li key={senator.get('id')}>
            {senator.get('person').get('name')}
          </li>
         ))}
      </div>
    );
  }
}
