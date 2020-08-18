import React from 'react';
import SignedLinks from './SignedLinks'
import './Header.css'
import '../fontawesome-free-5.12.0-web/css/all.css'

class Nav extends React.Component {
    constructor(props) {
        super(props)
       this.state={}
    }
    hadleClick(e){
        const path=e.target.closest('div').lastElementChild;
        path.classList.toggle('enable');
        console.log(e.target.closest('div').lastElementChild)
    }
   render(){
      return (
        <div className="nav">
         <ul>
            <SignedLinks></SignedLinks>
            </ul>
            <i className="fa fa-bars" onClick={this.hadleClick}></i>
            <input type="search" name="search" id="" placeholder="Search"/>
            <div className="navShow">
                <div>
            <SignedLinks></SignedLinks>
                </div>
            </div>
           
        </div>
    )
   }
}

export default Nav
