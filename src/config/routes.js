import React from 'react';
import App from '../containers/App.js';
import { Route } from 'react-router';
import Senate from '../containers/Senate';
import House from '../containers/House';

module.exports= (
  <div>
    <Route path='/' component={App}>
      <Route path='/senate' component={Senate} />
      <Route path='/house' component={House} />
    </Route>
  </div>
)
