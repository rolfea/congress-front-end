import React from 'react';
import Senate from './Senate';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow (<Senate />);
  expect(wrapper).toExist;
});
