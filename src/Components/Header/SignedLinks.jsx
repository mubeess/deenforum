import React from 'react'
import {withRouter} from 'react-router-dom'
import './Header.css'

function SignedLinks(props) {
    const handleChange=(e)=>{
        const path=e.currentTarget.id;
        props.history.push(`${path}`)


    }
    return (
        <ul>
        <li id='/signup' onClick={handleChange}>Sign Up</li>
        <li id='/login' onClick={handleChange}>Sign In</li>
        <li>About App</li>
        <li id='/question' onClick={handleChange}>Ask Question</li>
        </ul>
        
    )
}

export default withRouter(SignedLinks) 
