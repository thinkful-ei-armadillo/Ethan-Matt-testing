import React from 'react';
import Message from './Message';
import cuid from 'cuid';

function ChatLog (props) {

  const ChatLog = props.messages.map((u) => {

    return (
    <Message
      id = {u.participant.id}
      name={u.participant.name}
      avatar={u.participant.avatar}
      timestamp = {u.timestamp}
      type = {u.type}
      message ={u.message}
      key =  {cuid()}
    /> )
  });

  return (
    <div>
      {ChatLog}
    </div>
  );
}

export default ChatLog;
