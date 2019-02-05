import React from 'react';

import './UserOnStage.css';


function UserOnStage(props){

  return(
    <div className="userOnStage">
    <img className="userOnStage-avatar" src={props.avatar} alt={props.name} />
    <div>
      <h6 className="userOnStage-name" >{props.name}</h6>
    </div>
  </div>
  );
}