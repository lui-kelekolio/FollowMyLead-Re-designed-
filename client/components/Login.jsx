import React from "react"

class Login extends React.Component{
    constructor() {
        super()

        this.state ={
            username:'',
            password:''
        }
    }


render(){
    return(
        <div>
           <form>
               <h1>Login Form </h1>
               <hr />
               <label> Username: 
               <input type = 'text' placeholder = 'username' />
               </label>
               <label> Password: 
               <input type = 'text' placeholder = 'password'/>
               </label>
               <br />
               <input type= "submit" value= "Submit" />
           </form>
        </div>
    )
}



}
export default Login