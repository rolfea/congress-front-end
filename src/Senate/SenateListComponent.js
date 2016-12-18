import React from 'react'
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const SenateListComponent = ({mappedSenators}) => {
  const muiTheme = getMuiTheme({

  });
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <List>
        { mappedSenators.valueSeq().map((senator, i) => (
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
};

export default SenateListComponent;
