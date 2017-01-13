import axios from 'axios';

export function fetchLocationData(lat, lng) {
  var googleMapDataUrl = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}`;
  return axios.get(googleMapDataUrl).then((response) => response.data.results[4])
}
