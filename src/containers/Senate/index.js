import React, {Component, PropTypes} from 'react';
import { fromJS } from 'immutable'
import {ListComponent} from '../../components/ListComponent';
import { resolve } from 'react-resolver';
import axios from 'axios'

@resolve("senateData", () => {
  return axios.get("https://www.govtrack.us/api/v2/role?current=true");
})

export default class Senate extends Component {
  render () {
  console.log(this.props.senateData)
    // const 0 should be the data I want from the JSON objects
    // what methods can I use on this object to display data?
    // also, what can I do with the const xxx {x, y, z} syntax?
    const { senateData } = this.props
    const mappedSenators = fromJS(senateData.data.objects);

    return (
      <ListComponent mappedData={mappedSenators}/>
    );
  }
}

Senate.propTypes = {
  senateData: PropTypes.object,
};
