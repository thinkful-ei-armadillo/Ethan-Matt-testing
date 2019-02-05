import React from 'react';
import User from './User';

function UserList (props) {

  const UserList = props.users.map((u) => {

    return (<User
      id={u.id}
      name={u.name}
      avatar={u.avatar}
      inSession={u.inSession}
      onStage={u.onStage}
      key={u.id}
    /> )
  });

  return (
    <div>
      {UserList}
    </div>
  );
}

export default UserList;
