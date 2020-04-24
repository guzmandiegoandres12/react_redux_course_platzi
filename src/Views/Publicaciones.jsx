import React from 'react';
import { useGetUser , useGetpublicacionesUsuario } from '../hooks/Hooks'
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import './syles/Publicaciones.css'

const Publicaciones = (props) => {
  const iduser=props.match.params.id 
  const publicaciones=useGetpublicacionesUsuario(iduser)
  const users = useGetUser();

  ;
  return(
    <div className="publicacionescontainer">
      {
        publicaciones.cargando === true &&(<Spinner />)
      }
      {
        publicaciones.error!=='' && (<FatalError menssage={publicaciones.error} />)
      }
    </div>
  )
}

export default Publicaciones