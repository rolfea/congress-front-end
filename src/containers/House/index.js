import React, {PropTypes} from 'react';
import {createContainer} from 'react-transmit';
import { fromJS } from 'immutable'
import {fetchRepData} from '../../lib/democracyApi.js';
import {ListComponent} from '../../components/ListComponent';

const House = ({location, houseData}) => {
  const searchQuery = location.search;
  const selectedState = searchQuery.split("?state=")[1];
  const mappedReps = fromJS(houseData);

  return (
    <ListComponent selectedState={selectedState} mappedData={mappedReps} />
  );
}

export default createContainer(House, {
  initialVariables: {},
  fragments: {
    houseData: () => fetchRepData().then(res => res),
  }
});

House.propTypes = {
  houseData: PropTypes.array,
  location: PropTypes.object,
};
