import React from 'react';
import Message from './Message';

function ChatLog (props) {

  const ChatLog = props.users.map((u) => {

    return (<Message
      id={u.id}
      name={u.name}
      avatar={u.avatar}
      key={u.id}
      time = {u.time}
      type = {u.type}
      message ={u.message}
    /> )
  });

  return (
    <div>
      {ChatLog}
    </div>
  );
}

export default ChatLog;