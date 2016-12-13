import axios from 'axios';

export function fetchSenatorData() {
  var senateListUrl = "https://www.govtrack.us/api/v2/role?current=true"
  return axios.get(senateListUrl).then((response) => response.data.objects)
}
