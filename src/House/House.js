import React, {Component} from 'react';
import { fromJS } from 'immutable'
import {fetchRepData} from '../lib/democracyApi.js';
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ListComponent from '../ListComponent/ListComponent';

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
      <ListComponent mappedData={mappedReps} />
    );
  }
}
