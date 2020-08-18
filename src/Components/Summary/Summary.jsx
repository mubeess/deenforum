import React from 'react';
import Logo from '../../Utils/mal.jpg'
import './Summary.css'


function Summary() {
    return (
        <div className="summary">
          <h1 className="sumHeader">Your Question Attendants</h1> 
          <div className="sumProfile"><img src={Logo} alt="Shek"/> </div>
          <div className="sumProfile"><img src={Logo} alt="Shek"/> </div>
          <div className="sumProfile"><img src={Logo} alt="Shek"/> </div>
          <div className="sumProfile"><img src={Logo} alt="Shek"/> </div> 
        </div>
    )
}

export default Summary
