import React, {Component, PropTypes} from 'react';
import { fromJS } from 'immutable'
import {ListComponent} from '../../components/ListComponent';
import { resolve } from 'react-resolver';
import axios from 'axios'

@resolve("houseData", () => {
  return axios.get("https://www.govtrack.us/api/v2/role?role_type=representative&current=true");
})

export default class House extends Component {
  render () {
    const { houseData } = this.props
    const mappedReps = fromJS(houseData);

    return (
      <ListComponent mappedData={mappedReps.data.objects} />
    );
  }
}

House.propTypes = {
  houseData: PropTypes.object,
};
