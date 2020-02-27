import React from "react"
import {Link} from 'react-router-dom'


class Home extends React.Component{
    constructor() {
        super()

        this.state ={}
    }








render(){
    return(
        <div className="button-container">
            <button><Link className="button-basic" to = '/Register/Owner' >Register as an owner</Link></button>
            <button><Link className="button-basic" to = '/Register/Walker' >Register as a Walker</Link></button>
        </div>
    )
}



}




export default Home