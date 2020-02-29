import React from "react"
import {Link} from 'react-router-dom'


class Home extends React.Component{
    constructor() {
        super()

        this.state ={}
    }


render(){
    return(
        <main>
            <h1>Partnering People to Pooches!</h1>
            <div className="register-buttons">

                <div className="button">
                <Link className="button-basic" to = '/Register/Owner' >Register as an owner</Link>
                </div>

                <div className="button">
                <Link className="button-basic" to = '/Register/Walker' >Register as a Walker</Link>
                </div>

            </div>
            
            
            
        </main>
    )
}



}




export default Home