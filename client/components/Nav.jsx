import React from "react"

import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {

    return (
        <div className="nav">
            
            
            <ul>
            <img className="logo"src="/images/Logo1.png" alt="logo"/>
            <li><Link className="button-basic" to='/' >Home</Link></li>
            <IfNotAuthenticated>
                
                <li><Link className="button-basic" to='/Login' >Login</Link></li>
                <li><Link className="button-basic" to='/About'>About</Link></li>
                <li><Link className="button-basic" to='/Contact' >Contact</Link></li>
                
                
            </IfNotAuthenticated>
            
            <IfAuthenticated>
                <li><Link to='#' onClick={logOff}>Logout</Link></li>
                
                <li><Link className="nav-link" to='/' >My Profile</Link></li>
                <li><Link className="nav-link" to='/doglist' >Doglist</Link></li>
                <li><Link className="nav-link" to='/About'>About</Link></li>
                <li><Link className="nav-link" to='/Contact' >Contact</Link></li>
                
                
            </IfAuthenticated>
            </ul>
            
            
            
        </div>
    )
}




export default Nav