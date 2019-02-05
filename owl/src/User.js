import React from 'react';

import './User.css';

function User (props) {

  const status = props.onStage ? 'on stage' : '';

  return (
    <div className="user">
      <img className="user-avatar" src={props.avatar} alt={props.name} />
      <div>
        <h6 className="user-name" >{props.name}</h6>
        <div className="user-status">{status}</div>
      </div>
    </div>
  );
}

export default User;
