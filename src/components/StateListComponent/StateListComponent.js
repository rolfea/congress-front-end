import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  customWidth: {
    width: 200
  },
};
const muiTheme = getMuiTheme({});

const StateListComponent = ({selectedState, onHandleChange}) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <DropDownMenu
          value={selectedState}
          onChange={onHandleChange}
          style={styles.customWidth}
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

export default StateListComponent;
