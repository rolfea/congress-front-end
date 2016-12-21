import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchSenatorData} from '../lib/senators.js';
import SenateListComponent from './SenateListComponent';

export default class Senate extends Component {
  constructor(props) {
    super(props);
    this.state = {senateData: {}}
  }

  componentDidMount() {
    fetchSenatorData().then((response) => this.setState({senateData: response}))
  }

  render () {
    const { senateData } = this.state
    const mappedSenators = fromJS(senateData);

    return (
      <SenateListComponent mappedSenators={mappedSenators}/>
    );
  }
}
