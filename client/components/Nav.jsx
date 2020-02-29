import React from "react"

import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {

    return (
        <div className="nav">
            <button><Link className="button-basic" to='/' >Home</Link></button>
            <IfNotAuthenticated>
                <button><Link className="button-basic" to='/Login' >Login</Link></button>
            </IfNotAuthenticated>
            <IfAuthenticated>
                <button><Link to='#' onClick={logOff}>Logout</Link></button>
            </IfAuthenticated>
            
            
        </div>
    )
}




export default Nav