import React, { Component } from 'react'
import { Announcement,EmailSharp} from '@material-ui/icons'
import {connect} from 'react-redux'
import './Answer.css'

 class Answer extends Component {
     constructor(props) {
         super(props)
         
     }
      render() {
        const id=this.props.match.params.answerId;
        console.log(this.props.posts)
      const confirm=this.props.posts.length > 0 ? (this.props.posts.map((pos,index)=>{
          if (pos.id==id) {
            return (
                <div className='answerContainer'>
                    <div className="question">
            <h3 className="questionTitle">These is the question to{pos.id}</h3>
                        <p className="questionCont">
                            <i>
                            <Announcement></Announcement> 
                            {pos.content}
                            </i>
                        </p>
                    </div>
                    <div className="answer">
                       <h3 className="answerTitle">The title</h3>
                       <p className="answerCont">
                           <b>
                           <EmailSharp></EmailSharp>
                           {pos.answer}
                           </b>
                       </p>
                    </div>
                </div>
            )
          }
        
         
      })) : (<div>post not found</div>);
       
     return(confirm) 
    }
    
}
function MapStateToProps(state) {
  return {
    posts:state.questions
  }
}
export default connect(MapStateToProps)(Answer); 
