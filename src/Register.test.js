import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Create from './Components/register.js';

it('render register', () => {
  const wrapper = renderer.create(<Create/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})