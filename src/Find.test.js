import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Find from './Components/find.js';


it('render find', () => {
  const wrapper = renderer.create(<Find/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})