import React from "react"

class Register extends React.Component{
    constructor() {
        super()

        this.state ={}
    }



handleClick(){
    
}

//if register button clicked, then render register input field
// register owner button clicked ? render register owner field
// register walker button clicked ? render register walker field


render(){
    return(
        <div>
           <form>
               <button>Register Owner</button>
               <br />
               <br />
               <button>Register Walker</button>
           </form>
        </div>
    )
}



}
export default Register
