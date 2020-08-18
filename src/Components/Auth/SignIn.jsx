import React from 'react';
import {connect} from 'react-redux'
import {UserAuth} from '../../AppData/action/index'
import { Cancel, PhoneAndroid, Email, VerifiedUser,AccountCircle,VerifiedUserRounded } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css'
import Logo from '../../Utils/forum.jpg'
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
 
class SignIn extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      userName:'',
      password:''
    }
  }
  handleChange=(e)=>{
this.setState({userName: e.target.value})
  }
  handleChange2=(e)=>{
    this.setState({password: e.target.value})
      }
      handleSubmit=(e)=>{
        const username=this.state.userName;
        const password=this.state.password;
        this.props.users.filter(user=>{
 if(user.user_name==username && user.password==password) {
  user.loggedIn=true;
  this.props.authUser(user);
  this.props.history.push('/question')

 } 
            
 setTimeout(() => {
          alert('INVALID USERNAME!!!')
        }, 4000);    
        })
        
          }
   render(){
   
    return(
      <div className="loginContainer">
          <div className="mainLog">
              <img src={Logo}></img>
              <h2>Log In</h2>
              <div className="logInput">
                <AccountCircle></AccountCircle>
                <TextField 
                  onChange={this.handleChange}
                  id="standard-full-width"
                  label="User Name"
                  style={{ margin: 8 }}
                  placeholder=""
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }} />
                  <VerifiedUserRounded></VerifiedUserRounded>
                  <TextField 
                  onChange={this.handleChange2}
                  id="standard-full-width"
                  label="Password"
                  style={{ margin: 8 }}
                  placeholder=""
                  helperText=""
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }} />
                  <button onClick={this.handleSubmit}>Log In</button>
              </div>
          </div>
      </div>
  )

   }
  }
function mapStateToProps(state) {
  return {
    users:state.users
  }
}
function mapDispatchToProps(dispatch) {
  return{
    authUser:(user)=>{dispatch(UserAuth(user))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);