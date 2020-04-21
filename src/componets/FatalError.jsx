import React from 'react';
import './styles/FatalReact.css';
import notFout from '../assets/images/notfount.png';

const FatalReact = (props) => {
  return(
    <div className="FatalErrorContainer">
      <img alt="notFound" src={notFout} />
      <h1>{props.menssage || `Sorry page Not Found`}</h1>
    </div>
  )
}

export default FatalReact