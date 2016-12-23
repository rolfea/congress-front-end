import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  customWidth: {
    width: 400
  },
};
const muiTheme = getMuiTheme({});

export default class StateListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  //handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <DropDownMenu
            value={this.state.value}
            style={styles.customWidth}
            autoWidth={false}
          >
            <MenuItem></MenuItem>
          </DropDownMenu>
        </div>
      </MuiThemeProvider>
    )
  }
}
