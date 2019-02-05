import React from 'react';
import UserOnStage from './UserOnStage';

import './Stage.css'

function Stage (props) {

  const onStage = props.users.filter(u => u.onStage);
  const users = onStage.map(u => {
    return (<UserOnStage
      name={u.name}
      avatar={u.avatar}
      key = {u.id}
    />);
  });

  return (<div id="stage">
    <div id="stage-user-list">
      {users}
    </div>
  </div>);
}

export default Stage;
