import  React  from "react";
import './styles/Post.css';

const Post = (props) => {
  const {body,title}=props.data
  return(
    <section className="post">
      <div className="bodyPost">
        <div className="c1">
          <h4>{title}</h4>
        </div>
        <div className="c2">
        <p>{body}</p>
        </div>
      </div>
    </section>
  )
}

export default Post