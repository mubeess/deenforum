import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {QuestionAdded} from '../../AppData/action/index'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Cancel, PhoneAndroid, Email, VerifiedUser,QuestionAnswer, } from '@material-ui/icons';
import './Quest.css'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

 class Question extends Component {
     constructor(props) {
         super(props)
         this.state={
             IsLogged:true,
             Question:'',
             Title:''
         }
     }
      handleChange=(e)=>{
       let value=e.target.value;
       this.setState({Question:value})
    }
    handleClick=(e)=>{
        let value=e.target.value;
       this.setState({Title:value})
     }
    handleSubmit=(e)=>{
        e.preventDefault()
        const general={
            id: Date.now(),
            content:this.state.Question,
            title:this.state.Title,
            answer:''
        }
        this.setState({Question:''})
        this.setState({Title:''})
        this.props.addQuestion(general)
        
     }
     componentDidMount(){
         console.log(this.props)
         setTimeout(() => {
        this.props.user.filter(user=>{
                if(user.loggedIn==true){
                    this.setState({IsLogged:true})
                }})    
         }, 3000);
     }
        
     render() {
        
        setTimeout(() => {
            if (!this.state.IsLogged) {
                alert('You Are Not Logged In')
                this.props.history.push('/login')
            }
        }, 4000);
       console.log(this.props)
        return (
            <div className="QuesContainer">
                <form onSubmit={this.handleSubmit}>
                <h3 className="formHeader">Post a Question</h3>
                <div className="inputTi"><input onChange={this.handleClick} type="text" name="Title" id="" placeholder="Enter Title Of The Question"/></div>
                <QuestionAnswer></QuestionAnswer>
                <textarea name="Question" rows='7' onChange={this.handleChange} value={this.state.Question}></textarea>
                <div className="submit"><input  type="submit" value="Post"/></div>

                </form>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        user:state.users
    }
}
function mapActionToProps(dispatch) {
    return{
        addQuestion:(question)=>{dispatch(QuestionAdded(question))}
    }
}
export default connect(mapStateToProps,mapActionToProps)(Question) 