import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ChatLog from './ChatLog';
import * as serviceWorker from './serviceWorker';

const participants = [
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
const chatEvents = [
    {
        participantId: 3,
        type: 'message',
        message: 'Hello world',
        time: 1548852646559,
        timestamp: 1548852484247
    },
    {
        participantId: 2,
        type: 'thumbs-up',
        timestamp: 1548852484247
    },
    {
        participantId: 4,
        type: 'thumbs-down',
        timestamp: 1548852484247
    },
    {
        participantId: 1,
        type: 'raise-hand',
        timestamp: 1548852544247
    },
    {
        participantId: 1,
        type: 'clap',
        timestamp: 1548852544247
    },
    {
        participantId: 1,
        type: 'join',
        timestamp: 1548852544247
    },
    {
        participantId: 5,
        type: 'leave',
        timestamp: 1548852604247
    },
    {
        participantId: 3,
        type: 'join-stage',
        timestamp: 1548852664247
    },
    {
        participantId: 3,
        type: 'leave-stage',
        timestamp: 1548852724247
    }
];

const createChatMessages = function (participants, events) {

    return chatEvents.map((e) => {

    const expanded = {};

    // Convert participantID into participant object
    expanded.participant = participants.find(p => {
      return p.id === e.participantId;
    });


    // Add required attributes
    expanded.type = e.type;


    // do some date parsing
    let hours = new Date(e.timestamp).getHours();
    let min = new Date(e.timestamp).getMinutes();
    let amOrPm = new Date(e.timestamp).getHours() < 12 ? 'AM' :'PM';

    expanded.timestamp = `${hours}:${min} ${amOrPm}`;

    // Add optional attributes
    if (e.message) { expanded.message = e.message; }
    if (e.time) { expanded.time = e.time; }

    return expanded;
  });
};

const tempData = createChatMessages(participants, chatEvents);

console.log(tempData);

const test = <ChatLog messages={tempData} />

ReactDOM.render(test, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
