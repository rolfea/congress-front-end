import React from 'react';
import axios from 'axios';

class SenateData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

//   return axios.get(
//     "https://www.govtrack.us/api/v2/role?current=true"
//   ).then (
//     // res is the parameter for the function passed to #then
//     (res) => console.log(res.data.objects[1])
//   )
// };

export default SenateData;
