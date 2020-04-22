import React from 'react';
import { useSelector } from 'react-redux'
import { useGetUser , useGetpublicaciones} from '../hooks/Hooks'
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import './syles/Publicaciones.css'

const Publicaciones = (props) => {
  useGetUser();
  useGetpublicaciones()
  const {UsuariosReducers,PublicacionesReducers}=useSelector(store=>store)
  ;
  console.log(PublicacionesReducers);
  console.log(UsuariosReducers);
  
  return(
    <div className="publicacionescontainer">
      {
          PublicacionesReducers.cargando === true &&(<Spinner />)
      }
      {
        PublicacionesReducers.error!=='' && (<FatalError menssage={PublicacionesReducers.error} />)
      }
    </div>
  )
}

export default Publicaciones