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
            <p>Sometimes dog owners don't have time to walk their dogs and sometimes people who love dogs can't own one :(

FollowMyLead is an app that connects the people in local communities to find or walk man's best friend :) The idea is to allow dog lovers to find a compatable dog via a list of profiles which are registered from dog owners.

It is our intent to provide a platform where dogs can get their regular excersise and people who love dogs can walk them.</p>
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