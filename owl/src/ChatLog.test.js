import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog />, div);
  ReactDOM.unmountComponentAtNode(div);
});
