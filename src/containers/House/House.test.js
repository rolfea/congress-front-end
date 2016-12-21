import React from 'react';
import House from './House';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow (<House />);
  expect(wrapper).toExist;
});

