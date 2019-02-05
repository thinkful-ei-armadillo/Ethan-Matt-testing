import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List header="Test Header" cards={cards} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<List header="Test Header" cards={cards} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
