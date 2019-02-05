import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatLog from './ChatLog';

const messages = [
  {
      participant: {
        id: 3,
        name: 'Axe Kubicka',
        avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
        inSession: false,
        onStage: false
    },

      type: 'message',
      message: 'Hello world',
      time: 1548852646559,
      timestamp: 1548852484247
  },
  {
      participant: {
        id: 2,
        name: 'Caty Flucker',
        avatar:
            'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
      },
      type: 'thumbs-up',
      timestamp: 1548852484247
  },
  {
      participant: {
        id: 4,
        name: 'Frank Runciman',
        avatar:
            'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: false
    },
      type: 'thumbs-down',
      timestamp: 1548852484247
  },
  {
      participant: {
      id: 1,
        name: 'Koren Templeton',
        avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      type: 'raise-hand',
      timestamp: 1548852544247
  },
  {
      participant: {
      id: 1,
        name: 'Koren Templeton',
        avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      type: 'clap',
      timestamp: 1548852544247
  },
  {
      participant: {
      id: 1,
        name: 'Koren Templeton',
        avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      },
      type: 'join',
      timestamp: 1548852544247
  },
  {
      participant: {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    },
      type: 'leave',
      timestamp: 1548852604247
  },
  {
      participant: {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
      type: 'join-stage',
      timestamp: 1548852664247
  },
  {
      participant: {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
      type: 'leave-stage',
      timestamp: 1548852724247
  }
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChatLog messages={messages}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<ChatLog messages={messages}/>)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
