import axios from 'axios';
import { 
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_PUBLICACIONES,
  TRAER_PUBLICACIONES_POR_USUARIO,
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
    dispache({
      type:TRAER_PUBLICACIONES_POR_USUARIO,
      payload:{ 
        usuario: dataUser,
        post: getUserApi.data
      }
    })
  } catch (error) {
    console.log(error);
    
  }
}