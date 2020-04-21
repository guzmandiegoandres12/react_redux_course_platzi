import React, { Fragment ,useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../Actions/actions';
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import Table from '../componets/Table';
import './syles/Usuarios.css';

const Usuarios = () => {
const data = useSelector(({UsuariosReducers})=>UsuariosReducers)
console.log(data);

  const getUserDispache=useDispatch()
  useEffect(()=>{
    getUserDispache(getUsers())
  },[getUserDispache])
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