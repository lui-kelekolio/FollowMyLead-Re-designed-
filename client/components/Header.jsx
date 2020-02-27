import React from "react"
import {Link} from 'react-router-dom'

function Header() {
    return(
        <div className="header">
            <h1>Follow My Lead</h1>
            <button><Link className="button-basic" to = '/' >Home</Link></button>
            <button><Link className="button-basic" to = '/Login' >Login</Link></button>
        </div>
    )
}




export default Header