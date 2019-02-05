import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import * as serviceWorker from './serviceWorker';

const tempData = {
  id: 1,
  name: 'Koren Templeton',
  avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
  inSession: true,
  onStage: true
};

const test = <User
  id={tempData.id}
  name={tempData.name}
  avatar={tempData.avatar}
  inSession={tempData.inSession}
  onStage={tempData.onStage}
/>

ReactDOM.render(test, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
