import React, {PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { concatName } from '../../helper/dataHelper';

const ListComponent = ({mappedData, selectedState}) => {
  const filteredData = selectedState ? mappedData.filter((item) => item.get('state') === selectedState): mappedData;  

  const muiTheme = getMuiTheme({});
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <List>
        { filteredData.valueSeq().map((senator, i) => (
          <ListItem
            className="listedPerson"
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
};

export default ListComponent;

ListComponent.propTypes = {
  mappedData: PropTypes.object,
};
