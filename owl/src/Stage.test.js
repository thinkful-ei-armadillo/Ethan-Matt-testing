import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import UserList from './UserList';

const users = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',

  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',

  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',

  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
  
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',

  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage users={users} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<Stage users={users} />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
