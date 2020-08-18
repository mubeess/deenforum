import React, { Component } from 'react'
import {Info} from '@material-ui/icons'
import './Main.css';

 class Notifications extends Component {
    render() {
        return (
            <div className="notifyBody show">
           <div className="notifyContent">
            <Info></Info>
            <h4 className="notifyTitle">Question Posted By Mubarak</h4>
            <p className="notifyQuestion"><i>The Content Goes Here</i></p>
        <h5>Posted on {Date.now()}</h5>
            </div>
          </div>
        )
    }
}
export default Notifications;