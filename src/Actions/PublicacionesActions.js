import axios from 'axios';
import { 
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_PUBLICACIONES,
  TRAER_PUBLICACIONES_POR_USUARIO,
  ABRIR_COMENTARIOS_PUBLICACION
 } from '../ActionsTypes/Types';

export const getPublicaciones = () => async(dispache,getState)=>{
  dispache({
    type:CARGANDO_PUBLICACIONES,
  })
  
  try {
    const getUserApi= await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispache({
      type:TRAER_PUBLICACIONES,
      payload:getUserApi.data
    })
  } catch (error) {
    dispache({
      type:ERROR_PUBLICACIONES,
      payload:error.message
    })
  }
  
}
export const getPostForuser = (dataUser) =>  async (dispache,getstate) => {
  const {id} = dataUser
  try {
    const getUserApi= await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const publicaciones=getUserApi.data.map(e => {
      return{
        ...e ,
        comentarios:[],
        abierto:false
      }
    })
    dispache({
      type:TRAER_PUBLICACIONES_POR_USUARIO,
      payload:{ 
        usuario: dataUser,
        post:publicaciones
      }
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const abrirCerrar = (indexKeyPublicacion) => async (dispache, getState) => {
  const {PublicacionesReducers:{publicaciones:{post}}}=getState()
  post[indexKeyPublicacion].abierto= !post[indexKeyPublicacion].abierto
  const evalLengthComent=post[indexKeyPublicacion].comentarios.length
  if(evalLengthComent===0){
    const idComent=post[indexKeyPublicacion].id
    const getUserApi= await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${idComent}`)
    post[indexKeyPublicacion].comentarios=getUserApi.data
  }
  return dispache({
    type:ABRIR_COMENTARIOS_PUBLICACION,
    payload: post
  })
}