import { 
  TRAER_USUARIOS,
  CARGANDO_USUARIOS,
  ERROR_USUARIOS
} from '../ActionsTypes/Types';

const INITIAL_STATE = {
  usuarios:[],
  cargando:false,
  error:''
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case TRAER_USUARIOS:
      return {
        ...state,
        usuarios:action.payload,
        cargando:false,
        error:'',
      };
    case CARGANDO_USUARIOS:
      return {...state, cargando:true};
    case ERROR_USUARIOS:
      return {
        ...state,
        error:action.payload,
        cargando:false
      }
    default: return state
  }
}