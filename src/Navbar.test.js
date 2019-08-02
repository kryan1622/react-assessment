import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Example from './Components/navbar.js';


it('render navbar', () => {
  const wrapper = renderer.create(<Example/>).toJSON()
  expect(wrapper).toMatchSnapshot();
})