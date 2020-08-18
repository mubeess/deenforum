import React from 'react';
import Post from './Post';
import {connect} from 'react-redux'
import Summary from '../Summary/Summary'
import {Info,NotificationsActive,PostAdd,QuestionAnswer} from '@material-ui/icons'
import Notifications from './Notifications';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props)
    
  }
  handleClick1(e){
    const notification=e.currentTarget.closest('div').parentElement.children[1];
    const main=notification.parentElement.firstChild;
    const notifyBody =notification.children[1];
    const postHide=main.children[1];
    notification.classList.toggle('show');
    main.classList.toggle('show');
    notifyBody.classList.toggle('show');
    postHide.classList.toggle('show');
    

 

    
    }
  handleClick2(e){
    const notification=e.currentTarget.closest('div');
    const main=notification.parentElement.firstChild;
    const notifyBody =notification.children[1];
    const postHide=main.children[1];
    notification.classList.toggle('show');
    main.classList.toggle('show');
    notifyBody.classList.toggle('show');
    postHide.classList.toggle('show');
  


    
    }
  
 render(){
   console.log(this.props.posts)
    return (
      <div>
      <div className="main">
        <div className="post">
          <h1 className="postHead" onClick={this.handleClick1}>FAQ<QuestionAnswer></QuestionAnswer></h1>
          <div className="postHide"><Post post={this.props.posts} route={this.props.history}></Post></div>
        
        </div>
        <div className="notifications">
          <h1 onClick={this.handleClick2}>NOT<NotificationsActive  ></NotificationsActive></h1>
          <div className='notContainer'>
          <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>
         <Notifications/>

          </div>
         
         
        </div>
      </div>
      <Summary></Summary>
      </div>
      
  )
   }
}
function MapStateToProps(state) {
  return {
    posts:state.questions
  }
}

export default connect(MapStateToProps)(Main);
