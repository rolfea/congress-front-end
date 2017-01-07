import React, {PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { concatName } from '../../helper/dataHelper';

const ListComponent = ({mappedData, selectedState}) => {
  const filteredData = selectedState ? mappedData.filter((item) => item.get('state') === selectedState): mappedData;
  const muiTheme = getMuiTheme({});
  const listStyle = {
    margin: 'auto',
    width: '50%',
  };
  const listItemStyle = {
    boxShadow: '1px 1px 2px 2px #5D73A0',
  }

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <List style={listStyle}>
        { filteredData.valueSeq().map((senator, i) => (
          <ListItem
            style={listItemStyle}
            className="listedPerson"
            key={senator.get('id')}
            primaryText={
              senator.get('person').get('firstname') + " " + senator.get('person').get('lastname')
            }
            secondaryText={senator.get('description')}
            secondaryTextLines={2}
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
              key={i}
              secondaryTextLines={2}
              secondaryText={
                senator.get('phone')
              }/>
            ]}
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
