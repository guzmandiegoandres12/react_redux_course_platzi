import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getUsers } from '../Actions/actions';
import { getPublicaciones , getPostForuser } from '../Actions/PublicacionesActions';
/**
 * Hook para carga  de  usuarios
 */

export const useGetUser = ()=>{
  const {UsuariosReducers}=useSelector(store=>store)
  const storeDispach=useDispatch()
  useEffect(()=>{
    if(UsuariosReducers.usuarios.length===0){
      storeDispach(getUsers())
    }
  },[UsuariosReducers.usuarios.length,storeDispach])
  return UsuariosReducers
}
export const useGetpublicaciones = ()=>{
  const storeDispach=useDispatch()
  useEffect(()=>{
    storeDispach(getPublicaciones())
  },[storeDispach])
   console.log();
}

export const useGetpublicacionesUsuario = (usuario)=>{  
  const storeDispach=useDispatch()
  const {PublicacionesReducers}=useSelector(store=>store)
  useEffect(()=>{
    storeDispach(getPostForuser(usuario))
  },[storeDispach,usuario])
  return PublicacionesReducers
}