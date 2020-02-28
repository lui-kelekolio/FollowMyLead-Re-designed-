import React from "react"
import { signIn, isAuthenticated } from 'authenticare/client'
import { getWalkers } from "../api/walkerApi"

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            walker: []
        }
    }

    handlChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        signIn({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                console.log(token + "This is the token :)")
                if (isAuthenticated()) {
                    
                }
            })
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Login Form </h1>
                    <hr />
                    <label> Username:
               <input type='text' placeholder='username' />
                    </label>
                    <label> Password:
               <input type='text' placeholder='password' />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default Login