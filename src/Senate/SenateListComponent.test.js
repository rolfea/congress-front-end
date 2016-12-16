import React from 'react';
import SenateList from './SenateListComponent';
import { shallow } from 'enzyme';
import { Map, fromJS } from 'immutable';

const emptyData = Map();

it('renders without crashing', () => {
  const wrapper = shallow (<SenateList mappedSenators={emptyData}/>);
  expect(wrapper).toExist;
});

// id person.firstname person.lastname state
const senatorList = fromJS([
  { person: { firstname: "Barbara", lastname: "Boxer" }, state: "CA" },
  { person: { firstname: "Roy", lastname: "Blunt" }, state: "MO" },
  { person: { firstname: "John", lastname: "Boozman" }, state: "AR"}
]);

it('renders senators', () => {
  const wrapper = shallow(<SenateList mappedSenators={senatorList}/>);
  expect(wrapper.to.have.length(3)); // expect there 3 divs or classes
});
