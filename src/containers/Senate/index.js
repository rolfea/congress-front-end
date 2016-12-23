import React, {Component, PropTypes} from 'react';
import { fromJS } from 'immutable'
import {fetchSenatorData} from '../../lib/democracyApi.js';
import {ListComponent} from '../../components/ListComponent';

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
      <ListComponent mappedData={mappedSenators}/>
    );
  }
}

Senate.propTypes = {
  senateData: PropTypes.object,
};
