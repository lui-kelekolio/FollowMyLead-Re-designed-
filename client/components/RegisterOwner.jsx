import React from "react"
import { register, isAuthenticated } from 'authenticare/client'

import { addOwner } from '../api/ownerApi'

class RegisterOwner extends React.Component {
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            location: '',
            email: '',
            photo: ''
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
                    console.log("all good")
                    addOwner({
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        blurb: this.state.blurb,
                        location: this.state.location,
                        email: this.state.email,
                        photo: this.state.photo,
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Owner form</h1>
                    <hr />
                    <label> First name:
                        <input type='text' onChange={this.handleChange} placeholder='First name' />
                    </label>
                    <br />
                    <label> Last name:
                        <input type='text' onChange={this.handleChange} placeholder='Last name' />
                    </label>
                    <br />
                    <label> Location
                        <input type='text' onChange={this.handleChange} placeholder='Location' />
                    </label>
                    <br />
                    <label> email:
                        <input type='text' onChange={this.handleChange} placeholder='email' />
                    </label>
                    <br />
                    <label> Photo:
                        <input type='text' onChange={this.handleChange} placeholder='Photo' />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterOwner