import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {List, ListItem} from 'material-ui/List'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { concatName } from '../helper/dataHelper';


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
            key={i}
            primaryText={concatName(senator.get('person').toObject().firstname, senator.get('person').toObject().lastname)}
            secondaryText={senator.get('state')}
          />
         ))}
         </List>
      </div>
    </MuiThemeProvider>
  );
};

export default SenateListComponent;
