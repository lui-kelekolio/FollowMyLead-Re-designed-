import React from "react"
import {Link} from 'react-router-dom'

 function Footer () {
    return(
        <div className="footer">
            <Link to='/social'><a href="#" className="fa fa-twitter"></a></Link>
            <Link to='/social'><a href="#" className="fa fa-facebook"></a></Link>
            <Link to='/social'><a href="#" className="fa fa-instagram"></a></Link>
        </div>
    )
}




export default Footer