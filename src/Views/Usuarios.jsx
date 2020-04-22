import React, { Fragment } from 'react';
import { useGetUser } from '../hooks/Hooks'
import { useSelector} from 'react-redux';
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import Table from '../componets/Table';
import './syles/Usuarios.css';

const Usuarios = () => {
  useGetUser()
  const data = useSelector(({UsuariosReducers})=>UsuariosReducers)
  return (
    <Fragment>
      {
        data.cargando === true &&(<Spinner />)
      }
      {
        data.error!=='' && (<FatalError menssage={data.error} />)
      }
      {
      data.usuarios.length >0 && <Table data={data.usuarios}/>
      }
    </Fragment>
  );
}

export default Usuarios;