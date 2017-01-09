import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  width: 100,
  height: 40,
  boxShadow: '1px 1px 2px 2px #5D73A0',
};
const muiTheme = getMuiTheme({});

export default class StateListComponent extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <DropDownMenu
            value={this.props.selectedState}
            onChange={this.props.onHandleChange}
            style={styles}
            autoWidth={false}
          >
            <MenuItem value={"WI"} primaryText={"WI"} />
            <MenuItem value={"CA"} primaryText={"CA"} />
            <MenuItem value={"OH"} primaryText={"OH"} />
          </DropDownMenu>
        </div>
      </MuiThemeProvider>
    )
  }
}
