import React from 'react';
import IconEye from './IconEye';
import { Link } from 'react-router-dom'
import './styles/Table.css';

const Table = (props) => (
  <table className="tabla">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Correo</th>
      <th>Enlace</th>
    </tr>
  </thead>
  <tbody> 
    {props.data.map((usuario,index)=>( 
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
        <td><Link to={`/publicaciones/${index}`}><IconEye /></Link></td>
      </tr>
    ))}
  </tbody>
</table>
)
export default Table