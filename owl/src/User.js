import React from 'react';

import './User.css';

function User (props) {

  const status = props.onStage ? 'on stage' : '';

  return (
    <div class="user">
      <img class="user-avatar" src={props.avatar} alt={props.name} />
      <div>
        <h6 class="user-name" >{props.name}</h6>
        <div class="user-status">{status}</div>
      </div>
    </div>
  );
}

export default User;
