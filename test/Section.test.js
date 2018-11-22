import React from 'react';
import ReactDOM from 'react-dom';
import Section from '../src/components/Section';

it('Question component is rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Section />, div);
  ReactDOM.unmountComponentAtNode(div);
});