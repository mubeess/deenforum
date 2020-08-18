import React from 'react'
import './Main.css'
import Logo from '../../Utils/forum2.jpg'
const Post=(props)=> {
  console.log(props)
  const indPost=props.post ? (
    props.post.map((pos,index)=>{
      console.log(pos)
      return(
        <div key={index} className="indPost">
            <img src={Logo} alt="" srcset=""/>
            <h3 className="postTitle">
              {pos.title}
            </h3>
            <p className="postContent">
             <i>{pos.content}</i><br/>
             <button className="answer" onClick={()=>{
                 props.route.push(`/answer/${pos.id}`);
             }}>Answer</button>
            </p>
            <hr className="posthr"></hr>
              <h5 className="postFooter">
                these goes to footer
              </h5>
          </div>
      )

    })
  ) : (
    <div>No post yet</div>
  );
        return (indPost)
          
   
}

export default Post
