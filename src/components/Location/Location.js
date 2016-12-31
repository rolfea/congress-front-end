/*eslint-disable */
import React from 'react';
import {geolocated} from 'react-geolocated';
import {fetchLocationData} from '../../lib/location.js';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: ''};
  }

  getChildContext() {
    return {userLocation: this.state.data};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== null) {
      const lat = nextProps.coords.latitude;
      const lng = nextProps.coords.longitude;

      this.props.isGeolocationAvailable && fetchLocationData(lat, lng)
        .then((response) => this.setState({data: response.address_components[3].short_name}));
    }
  }

  render() {
    return this.props.children;
  }
}

Location.childContextTypes = {
  userLocation: React.PropTypes.string
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(Location);
