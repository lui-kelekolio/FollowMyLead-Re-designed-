import React from "react"
import { register, isAuthenticated } from 'authenticare/client'

import { addWalker } from '../api/walkerApi'


class RegisterWalker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            blurb: '',
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
                    addWalker({
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
                <form onSubmit={this.handleSubmit} autoComplete='off'>
                    <h1>Walker form</h1>
                    <br />
                    <label> User Name:
                        <input type='text' placeholder='user name' name='username' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Password:
                        <input type="text" placeholder='password' name='password' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> First name:
                        <input type='text' placeholder='First name' name='first_name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Last name:
                        <input type='text' placeholder='Last name' name='last_name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Blurb:
                        <input type='text' placeholder='Blurb' name='blurb' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Location
                        <input type='text' placeholder='Location' name='location' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> email:
                        <input type='text' placeholder='email' name='email' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Photo:
                        <input type='text' placeholder='Photo' name='photo' onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterWalker