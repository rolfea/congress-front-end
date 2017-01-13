import React from 'react';
import App from '../containers/App.js';
import { Route, browserHistory } from 'react-router';
import Senate from '../containers/Senate';
import House from '../containers/House';

module.exports= (
  <div>
    <Route history={browserHistory} path='/' component={App}>
      <Route path='/senate' component={Senate} />
      <Route path='/house' component={House} />
    </Route>
  </div>
)
