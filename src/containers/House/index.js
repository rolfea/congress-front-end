import React, {Component, PropTypes} from 'react';
import {createContainer} from "react-transmit";
import { fromJS } from 'immutable'
import {fetchRepData} from '../../lib/democracyApi.js';
import {ListComponent} from '../../components/ListComponent';

class House extends Component {
  render () {
    const { houseData } = this.props
    const mappedReps = fromJS(houseData);

    return (
      <ListComponent mappedData={mappedReps} />
    );
  }
}

export default createContainer(House, {
  initialVariables: {},
  fragments: {
    houseData: () => fetchRepData().then(res => res),
  }
});

House.propTypes = {
  houseData: PropTypes.object,
};
