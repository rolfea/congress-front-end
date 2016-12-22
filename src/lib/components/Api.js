import axios from 'axios'

export function fetchData() {
  return axios.get(
    "https://www.govtrack.us/api/v2/role?current=true"
  ).then(
      (res) => console.log(res.data.objects[1])
  )
};
