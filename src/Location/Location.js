/*eslint-disable */
import React from 'react';
import {geolocated} from 'react-geolocated';
import {fetchLocationData} from '../lib/location.js';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coords !== null) {
      const lat = nextProps.coords.latitude;
      const lng = nextProps.coords.longitude;

      this.props.isGeolocationAvailable && fetchLocationData(lat, lng)
        .then((response) => this.setState({data: response}));
    }
  }

  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>address</td><td>{this.state.data.formatted_address}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(Location);
