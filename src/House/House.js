import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchRepData} from '../lib/representatives.js';
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {houseData: {}}
  }

  componentDidMount() {
    fetchRepData().then((response) => this.setState({houseData: response}))
  }

  render () {
    const { houseData } = this.state
    const mappedReps = fromJS(houseData);
    const muiTheme = getMuiTheme({ });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <List>
          { mappedReps.map((rep, i) => (
            <ListItem
              className="listedRep"
              key={rep.get('id')}
              primaryText={
                rep.get('person').get('firstname') + " " + rep.get('person').get('lastname')
              }
              secondaryText={rep.get('state')}
            />
           ))}
           </List>
        </div>
      </MuiThemeProvider>
    );
  }
}
