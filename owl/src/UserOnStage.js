import React from 'react';

import './UserOnStage.css';

function UserOnStage(props){

  return(
    <div className="userOnStage">
    <div className='userName'>
        <h6 className="userOnStage-name" >{props.name}</h6>
      </div>
      <img className="userOnStage-avatar" src={props.avatar} alt={props.name} />
      
    </div>
  );
}

export default UserOnStage;
