import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Login from './Components/login.js';

it('render login', () => {
  const wrapper = renderer.create(<Login/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})