import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-15.4';
Enzyme.configure({ adapter: new Adapter() });

const Hello = props => {
  return <p>Hello World</p>;
};

it('should mount the test', () => {
  let wrapper = mount(<Hello />);

  expect(true).toBe(true);
});


it('should shallow render the test', () => {
  let wrapper = shallow(<Hello />);

  expect(true).toBe(true);
});
