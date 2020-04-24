import React, { Fragment } from 'react';
import { useGetUser } from '../hooks/Hooks'
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import Table from '../componets/Table';
import './syles/Usuarios.css';

const Usuarios = () => {
  
  const usuarios = useGetUser()
  console.log(usuarios.usua);
  
  return (
    <Fragment>
      {
        usuarios.cargando === true &&(<Spinner />)
      }
      {
        usuarios.error!=='' && (<FatalError menssage={usuarios.error} />)
      }
      {
        usuarios.usuarios.length >0 && <Table data={usuarios.usuarios}/>
      }
    </Fragment>
  );
}

export default Usuarios;