import React from 'react';
import App from '../App.js';
import { Route } from 'react-router';
import Senate from '../Senate/Senate';
import House from '../House/House';

module.exports= (
  <div>
    <Route path='/' component={App}>
      <Route path='/senate' component={Senate} />
      <Route path='/house' component={House} />
    </Route>
  </div>
)
