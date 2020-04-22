import axios from 'axios';
import { 
  TRAER_USUARIOS,
  CARGANDO_USUARIOS,
  ERROR_USUARIOS
 } from '../ActionsTypes/Types';

export const getUsers = () => async(dispache)=>{
  dispache({
    type:CARGANDO_USUARIOS,
  })
  try {
    const getUserApi= await axios.get('https://jsonplaceholder.typicode.com/users')
    dispache({
      type:TRAER_USUARIOS,
      payload:getUserApi.data
    })
  } catch (error) {
    dispache({
      type:ERROR_USUARIOS,
      payload:error.message
    })
  }
  
}