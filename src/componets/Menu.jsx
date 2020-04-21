import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './styles/Menu.css';

const Menu = (props)=>{
  return(
    <nav>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Usuarios</NavLink></li>
        <li><NavLink exact to="/tareas" activeClassName="active">tareas</NavLink></li>
      </ul>
    </nav>
  )
}
export default withRouter(Menu)