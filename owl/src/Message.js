import React from 'react';

import './Message.css';

function Message (props) {

    let message ='';
    switch(props.type){
      case 'thumb-up':
        message = 'gave a thumbs up';
        break;
        case 'thumb-down':
        message = 'gave a thumbs down';
        break;
        case 'raise-hand':
        message = 'raised their hand';
        break;
        case 'join':
        message = 'joined';
        break;
        case 'clap':
        message = 'clapped';
        break;
        case 'join-stage':
        message = 'joined the stage';
        break;
        case 'leave-stage':
        message = 'left the stage';
        break;
        case 'leave':
        message = 'left';
        break;
        default:
        message = props.message;
        break;
    }


    if(message === props.message){
      return (
        <div className="system-message">
          <div> <img src= {props.avatar} alt='some avatar'/><strong>{props.name} </strong> {props.timestamp}</div>
          <div>{message}</div>
        </div>

      );
    }
    else{
      return (
        <div className="system-message">
          <p><strong>{props.name} </strong>{message}</p>
        </div>

      );
    }

}

export default Message;
