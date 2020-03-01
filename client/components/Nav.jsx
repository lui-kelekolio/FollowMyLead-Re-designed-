import React from "react"

import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {

    return (
        <div className="nav">
            
            
            
            <IfNotAuthenticated>
                <button><Link className="button-basic" to='/' >Home</Link></button>
                <button><Link className="button-basic" to='/Login' >Login</Link></button>
                <button><Link className="button-basic" to='/About'>About</Link></button>
                <button><Link className="button-basic" to='/Contact' >Contact</Link></button>
                
                
            </IfNotAuthenticated>
            
            <IfAuthenticated>
                <button><Link to='#' onClick={logOff}>Logout</Link></button>
                <button><Link className="button-basic" to='/' >Home</Link></button>
                <button><Link className="button-basic" to='/' >My Profile</Link></button>
                <button><Link className="button-basic" to='/doglist' >Doglist</Link></button>
                <button><Link className="button-basic" to='/About'>About</Link></button>
                <button><Link className="button-basic" to='/Contact' >Contact</Link></button>
                
                
            </IfAuthenticated>
            
            
            
        </div>
    )
}




export default Nav