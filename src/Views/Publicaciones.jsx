import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers  } from '../Actions/actions';
import { getPostForuser  } from '../Actions/PublicacionesActions';
import { useGetUser , useGetpublicacionesUsuario } from '../hooks/Hooks'
import Spinner from '../componets/Spinner';
import FatalError from '../componets/FatalError';
import Post from  '../componets/Post'
import './syles/Publicaciones.css'

const Publicaciones = (props) => {
  const iduser= parseInt(props.match.params.id )
  const {UsuariosReducers ,PublicacionesReducers} = useSelector(store=>store)
  const user=UsuariosReducers.usuarios.find(e => e.id === iduser)

  useGetUser(getUsers,UsuariosReducers.usuarios.length)
  useGetpublicacionesUsuario(getPostForuser,user)

  const validationRender=({publicaciones,cargando,error})=>{
    if(cargando === true || publicaciones.length === 0) return <Spinner />
    if(error !== '') return <FatalError menssage={error} />
    const {post} = publicaciones
    return (post.map( element => <Post key={element.id} data={element}/>))
  }
  
  return(
    <div className="publicacionescontainer">
      <h1>{ user ? `Publicaciones de ${user.name}` :  ``}</h1> 
      {
        validationRender(PublicacionesReducers)
      }
    </div>
  )
}

export default Publicaciones