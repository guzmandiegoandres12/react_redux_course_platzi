import  React  from "react";
import './styles/Post.css';
import { useDispatch  } from 'react-redux';
import { abrirCerrar } from '../Actions/PublicacionesActions';
import Comentarios from './Comentarios';
const Post = (props) => {
  const dispache=useDispatch()
  
  const {positionArray}=props
  const {body,title, abierto, comentarios }=props.data
  return(
    <section className="post" onClick={()=>dispache(abrirCerrar(positionArray))}>
      <div className="bodyPost">
        <div className="c1">
          <h4>{title}</h4>
        </div>
        <div className="c2">
        <p>{body}</p>
        {abierto ? <Comentarios data={comentarios}/> : null }
        </div>

      </div>
      
    </section>
  )
}

export default Post