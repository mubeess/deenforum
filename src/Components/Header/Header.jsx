import React from 'react'
import {withRouter} from 'react-router-dom'
import Nav from './Nav'
import './Header.css'
import Logo from '../../Utils/forum2.jpg'


class Header extends React.Component {
  
  
  handleClick=(e)=>{
   this.props.history.push('/')
  }
    render(){
      return (
        <div className="header">
          <div className="logo" onClick={this.handleClick}>
           <img src={Logo} alt="logo"/>
           <h4 className="logoTitle">
             MB's Forum
           </h4>
          </div>
          <Nav></Nav> 
          
        </div>
    )
    }
}

export default withRouter(Header) 
