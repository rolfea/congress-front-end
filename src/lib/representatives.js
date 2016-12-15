import axios from 'axios';

export function fetchRepData() {
  var repListUrl = "https://www.govtrack.us/api/v2/role?role_type=representative&current=true "
  return axios.get(repListUrl).then((response) => response.data.objects)
}
