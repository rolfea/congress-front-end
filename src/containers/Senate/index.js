import React, {PropTypes} from 'react';
import {createContainer} from 'react-transmit';
import { fromJS } from 'immutable'
import {fetchSenatorData} from '../../lib/democracyApi.js';
import {ListComponent} from '../../components/ListComponent';

const Senate = ({location, senateData}) => {
  const searchQuery = location.search;
  const selectedState = searchQuery.split("?state=")[1];
  const mappedSenators = fromJS(senateData);

  return (
    <ListComponent selectedState={selectedState} mappedData={mappedSenators}/>
  );
}

export default createContainer(Senate, {
  initialVariables: {},
  fragments: {
    senateData: () => fetchSenatorData().then(res => res),
  }
});

Senate.propTypes = {
  senateData: PropTypes.array,
  location: PropTypes.object,
};
