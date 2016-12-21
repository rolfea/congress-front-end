import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchRepData} from '../../lib/democracyApi.js';
import {ListComponent} from '../../components/ListComponent';

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {houseData: {}}
  }

  componentDidMount() {
    fetchRepData().then((response) => this.setState({houseData: response}))
  }

  render () {
    const { houseData } = this.state
    const mappedReps = fromJS(houseData);

    return (
      <ListComponent mappedData={mappedReps} />
    );
  }
}
