import { 
  TRAER_PUBLICACIONES,
  CARGANDO_PUBLICACIONES,
  ERROR_PUBLICACIONES,
  TRAER_PUBLICACIONES_POR_USUARIO,
  ABRIR_COMENTARIOS_PUBLICACION
} from '../ActionsTypes/Types';

const INITIAL_STATE = {
  publicaciones:[],
  cargando:false,
  error:''
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case TRAER_PUBLICACIONES:
      return {
        ...state,
        publicaciones:action.payload,
        cargando:false,
        error:"",
      }
    case TRAER_PUBLICACIONES_POR_USUARIO:
      return {
        ...state,
        publicaciones:action.payload,
        cargando:false,
        error:"",
      }
    case CARGANDO_PUBLICACIONES:
      return {...state, cargando:true};
    case ERROR_PUBLICACIONES:
      return {
        ...state,
        error:action.payload,
        cargando:false
      }
    case ABRIR_COMENTARIOS_PUBLICACION:
      return{
        ...state,
        publicaciones:{
          usuario: state.publicaciones.usuario,
          post:action.payload
        }
      }
    default: return state
  }
}
