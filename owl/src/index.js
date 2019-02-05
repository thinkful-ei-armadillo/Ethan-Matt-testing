import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserList from './UserList';
import * as serviceWorker from './serviceWorker';

const tempData = [
  {
      id: 1,
      name: 'Koren Templeton',
      avatar:
          'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  },
  {
      id: 2,
      name: 'Caty Flucker',
      avatar:
          'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 3,
      name: 'Axe Kubicka',
      avatar: 'https://robohash.org/utlaborumfugit.jpg?size=200x200&set=set1',
      inSession: false,
      onStage: false
  },
  {
      id: 4,
      name: 'Frank Runciman',
      avatar:
          'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: false
  },
  {
      id: 5,
      name: 'Ashla Attwool',
      avatar:
          'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
      inSession: true,
      onStage: true
  }
];
const test = <Stage users={tempData} />

ReactDOM.render(test, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
