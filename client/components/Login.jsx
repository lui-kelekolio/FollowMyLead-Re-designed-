import React from "react"
import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client'
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
        e.preventDefault()
        signIn({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
        })
            .then((token) => {
                console.log(token + "This is the token :)")
                if (isAuthenticated()) {
                    this.props.history.push('/owner/' + getDecodedToken().id)
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login Form </h1>
                    <hr />
                    <label> Username:
               <input type='text' placeholder='username' name='username' onChange={this.handlChange} />
                    </label>
                    <label> Password:
               <input type='text' placeholder='password' name='password' onChange={this.handlChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default Login