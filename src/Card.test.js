import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Card title="Test Title" content="Test Content" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
