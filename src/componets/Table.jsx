import React from 'react';
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
    {props.data.map((usuario)=>( 
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    ))}
  </tbody>
</table>
)
export default Table