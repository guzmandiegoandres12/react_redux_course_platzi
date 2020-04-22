import axios from 'axios';
import { 
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_PUBLICACIONES,
 } from '../ActionsTypes/Types';

export const getPublicaciones = () => async(dispache)=>{
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