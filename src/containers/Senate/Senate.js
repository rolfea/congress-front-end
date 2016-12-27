import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchSenatorData} from '../../lib/democracyApi.js';
import SenateListComponent from '../../components/ListComponent/ListComponent';

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
      <SenateListComponent mappedData={mappedSenators}/>
    );
  }
}
