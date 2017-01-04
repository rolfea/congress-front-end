import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';
import Location from './components/Location/Location';

render(
  <Location>
    <Router routes={routes} history={browserHistory} />
  </Location>,
  document.getElementById('root')
);
