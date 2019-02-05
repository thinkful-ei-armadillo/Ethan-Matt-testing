import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it('renders without crashing', () => {

  const cards = [
    {
      key     : 'a',
      title   : 'Card Title',
      content : 'Card Content',
    },
    {
      key     : 'b',
      title   : 'Card Title',
      content : 'Card Content',
    },
    {
      key     : 'c',
      title   : 'Card Title',
      content : 'Card Content',
    },
  ];

  const div = document.createElement('div');
  ReactDOM.render(<List header="Test Header" cards={cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
