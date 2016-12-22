import React from 'react';
import List from './ListComponent';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

const emptyData = Map();

it('renders without crashing', () => {
  const wrapper = shallow (<List mappedData={emptyData}/>);
  expect(wrapper).toExist;
});

const senatorList = [{name: "Barbara Boxer", state: "CA"}, {}, {}]

it('renders senators', () => {
  const wrapper = shallow (<List mappedData={emptyData}/>);
  expect(wrapper).toExist; // expect there 3 divs or classes
});
