import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
/**
 * Hook para carga  de  usuarios
 */
export const useGetUser = (getUsers,lengtUser) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(lengtUser===0){
      dispatch(getUsers());
    }
  }, [dispatch,getUsers,lengtUser])
}

export const useGetpublicaciones = ()=>{
  useEffect(()=>{
   
  },[])
 
}

export const useGetpublicacionesUsuario = (GetpublicacionPorUsuario,data)=>{  
  const dispatch = useDispatch()
  useEffect(()=>{
    if(data) dispatch(GetpublicacionPorUsuario(data));
  },[data,GetpublicacionPorUsuario,dispatch])
 
}