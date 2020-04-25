import React from 'react';

const Comentarios = (props) =>{
  const {data}=props;
  return(
  <ul>
    {data.map( data => {
      return(
        <li key= {data.id}>
          <h4>{data.name}</h4>
          <p>{data.body}</p>
        </li>
        ) 
    })}
  </ul>
  )
}
export default Comentarios