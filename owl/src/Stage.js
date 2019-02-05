import React from 'react';
import User from './User';

function Stage (props) {

  const onStage = props.users.filter(u => u.onStage);
  const users = onStage.map(u =>{
    return (<UserOnStage
      name={u.name}
      avatar={u.avatar}
      key = {u.id}
     />
  });

  return (<div>
    <div>
      {users}
    </div>
  </div>);
}

export default Stage;
