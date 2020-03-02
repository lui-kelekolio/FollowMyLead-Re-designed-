import React from "react"
import { signIn, isAuthenticated, getDecodedToken } from 'authenticare/client'
import { getUserDetails } from "../api/walkerApi"

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
                    getUserDetails(getDecodedToken().id).then(user => {
                        console.log('line 33, login,user:', user)
                        if (user.walker) this.props.history.push('/walker/' + user.walker.id)
                        if (user.owner) this.props.history.push('/owner/' + user.owner.id)
                    })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                    
                <img className="logoform" src="/images/Logo2.png" alt="logo" />
                    <br />
                    <label> Username:</label>
                    <br />
                    <input className='input' type='text' placeholder='username' name='username' onChange={this.handlChange} />
                    
                    <br />
                    <label> Password: </label>
                    <br />
                    <input className='input' type='text' placeholder='password' name='password' onChange={this.handlChange} />
                    
                    <br />
                    <br />
                    <input className='input' type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default Login