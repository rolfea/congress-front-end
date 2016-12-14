import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchSenatorData} from './lib/senators.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Senate extends Component {
  constructor(props) {
    super(props);
    this.state = {senateData: {}}
  }

  componentDidMount() {
    fetchSenatorData().then((response) => this.setState({senateData: response}))
  }

  render () {
    // const 0 should be the data I want from the JSON objects
    // what methods can I use on this object to display data?
    // also, what can I do with the const xxx {x, y, z} syntax?
    const { senateData } = this.state
    const mappedSenators = fromJS(senateData);
    const muiTheme = getMuiTheme({

    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <List>
          { mappedSenators.map((senator, i) => (
            <ListItem
              className="listedSenator"
              key={senator.get('id')}
              primaryText={
                senator.get('person').get('firstname') + " " + senator.get('person').get('lastname')
              }
              secondaryText={senator.get('state')}
            />
           ))}
           </List>
        </div>
      </MuiThemeProvider>
    );
  }
}
