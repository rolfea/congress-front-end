import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchSenatorData} from '../../lib/democracyApi.js';
import SenateListComponent from '../../components/ListComponent/ListComponent';

class Senate extends Component {
  render () {
    // const 0 should be the data I want from the JSON objects
    // what methods can I use on this object to display data?
    // also, what can I do with the const xxx {x, y, z} syntax?
    const { senateData } = this.state
    const mappedSenators = fromJS(senateData);

    return (
      <SenateListComponent mappedData={mappedSenators}/>
    );
  }
}

export default createContainer(House, {
  initialVariables: {},
  fragments: {
    senateData: () => fetchSenatorData().then(res => res),
  }
});
