import React from 'react';
import List from './ListComponent';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

const emptyData = Map();

it('renders without crashing', () => {
  const wrapper = shallow (<List mappedData={emptyData}/>);
  expect(wrapper).toExist;
});

// id person.firstname person.lastname state
const senatorList = fromJS([
  { person: { firstname: "Barbara", lastname: "Boxer" }, state: "CA" },
  { person: { firstname: "Roy", lastname: "Blunt" }, state: "MO" },
  { person: { firstname: "John", lastname: "Boozman" }, state: "AR"}
]);

it('renders senators', () => {
  const wrapper = shallow (<List mappedData={emptyData}/>);
  expect(wrapper).toExist; // expect there 3 divs or classes

});
