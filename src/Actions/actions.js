import axios from 'axios';
import { 
  TRAER_USUARIOS,
  CARGANDO,
  ERROR
 } from '../ActionsTypes/Types';

export const getUsers = () => async(dispache)=>{
  dispache({
    type:CARGANDO,
  })
  try {
    const getUserApi= await axios.get('https://jsonplaceholder.typicode.com/users')
    dispache({
      type:TRAER_USUARIOS,
      payload:getUserApi.data
    })
  } catch (error) {
    dispache({
      type:ERROR,
      payload:error.message
    })
  }
  
}