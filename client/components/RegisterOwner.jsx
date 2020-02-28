import React from "react"
import { register, isAuthenticated } from 'authenticare/client'

import { addOwner } from '../api/ownerApi'

class RegisterOwner extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            first_name: '',
            last_name: '',
            location: '',
            email: '',
            photo: '',
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        register({
            username: this.state.username,
            password: this.state.password
        }, {
            baseUrl: process.env.BASE_API_URL
        })
            .then((token) => {
                if (isAuthenticated()) {
                    
                    addOwner({
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        blurb: this.state.blurb,
                        location: this.state.location,
                        email: this.state.email,
                        photo: this.state.photo,
                    })
                    this.props.history.push('/')
                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Owner form</h1>
                    <br />
                    <label> Username:
                        <input type='text' name='username' onChange={this.handleChange} placeholder='Username' />
                    </label>
                    <br />
                    <label> Password:
                        <input type='text' name='password' onChange={this.handleChange} placeholder='Password' />
                    </label>
                    <br />
                    <label> First name:
                        <input type='text' name='first_name' onChange={this.handleChange} placeholder='First name' />
                    </label>
                    <br />
                    <label> Last name:
                        <input type='text' name='last_name' onChange={this.handleChange} placeholder='Last name' />
                    </label>
                    <br />
                    <label> Location
                        <input type='text' name='location' onChange={this.handleChange} placeholder='Location' />
                    </label>
                    <br />
                    <label> email:
                        <input type='text' name='email' onChange={this.handleChange} placeholder='email' />
                    </label>
                    <br />
                    <label> Photo:
                        <input type='text' name='photo' onChange={this.handleChange} placeholder='Photo' />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterOwner