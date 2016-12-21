import React from 'react';
import SenateList from './SenateListComponent';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

const emptyData = Map();

it('renders without crashing', () => {
  const wrapper = shallow (<SenateList mappedSenators={emptyData}/>);
  expect(wrapper).toExist;
});

const senatorList = [{name: "Barbara Boxer", state: "CA"}, {}, {}]

it('renders senators', () => {
  const wrapper = shallow (<SenateList mappedSenators={emptyData}/>);
  expect(wrapper).toExist; // expect there 3 divs or classes
});
