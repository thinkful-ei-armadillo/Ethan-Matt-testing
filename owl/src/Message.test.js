import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import cuid from 'cuid';
import Message from './Message';


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

const alpha = {
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
};

const bravo = {
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
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message
    id = {alpha.participant.id}
    name={alpha.participant.name}
    avatar={alpha.participant.avatar}
    time = {alpha.time}
    type = {alpha.type}
    message ={alpha.message}
    key =  {cuid()}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Message
    id = {bravo.participant.id}
    name={bravo.participant.name}
    avatar={bravo.participant.avatar}
    time = {bravo.time}
    type = {bravo.type}
    message ={bravo.message}
    key =  {cuid()}
  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<Message
    id = {alpha.participant.id}
    name={alpha.participant.name}
    avatar={alpha.participant.avatar}
    time = {alpha.time}
    type = {alpha.type}
    message ={alpha.message}
    key =  {cuid()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the UI as expected', () => {
  const tree = renderer
  .create(<Message
    id = {bravo.participant.id}
    name={bravo.participant.name}
    avatar={bravo.participant.avatar}
    time = {bravo.time}
    type = {bravo.type}
    message ={bravo.message}
    key =  {cuid()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
