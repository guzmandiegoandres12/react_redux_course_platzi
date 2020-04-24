import React, { Fragment} from 'react';
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import Table from '../componets/Table';
import { useSelector } from 'react-redux';
import { getUsers } from '../Actions/actions';
import { useGetUser } from '../hooks/Hooks'
import './syles/Usuarios.css';

const Usuarios = () => {
  const {UsuariosReducers} = useSelector(store=>store)
  useGetUser(getUsers,UsuariosReducers.usuarios.length)
  
  const validationRender = () => {
    if(UsuariosReducers.cargando === true) return (<Spinner />)
    if(UsuariosReducers.error!=='') return <FatalError menssage={UsuariosReducers.error} />
    if(UsuariosReducers.usuarios.length > 0) return  <Table data={UsuariosReducers.usuarios}/>
    return <h1>No hay usuarios</h1>

  }
  return (
    <Fragment>
      {
       validationRender()
      }
    </Fragment>
  );
}

export default Usuarios;