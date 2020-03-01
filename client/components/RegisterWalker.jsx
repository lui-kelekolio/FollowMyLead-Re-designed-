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
                <form onSubmit={this.handleSubmit}>
                    <h1>Walker form</h1>
                    <br />
                    <label> User Name: </label>
                        <input 
                            type='text' 
                            name='username' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Password: </label>
                        <input 
                            type="text" 
                            name='password' 
                            onChange={this.handleChange} />
                    <br />

                    <label> First name: </label>
                        <input 
                            type='text' 
                            name='first_name' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Last name: </label>
                        <input 
                            type='text' 
                            name='last_name' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Blurb: </label>
                        <input 
                            type='text' 
                            name='blurbgit ' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Location: </label>
                        <select 
                            type='text' 
                            name='location' 
                            onChange={this.handleChange} >
                        <option
                            value='select'>select
                        </option>
                        <option
                            value='Aro Valley'>Aro Valley
                        </option>
                        <option
                            value='Berhampore'>Berhampore
                        </option>
                        <option
                            value='Breaker Bay'>Breaker Bay
                        </option>
                        <option
                            value='Broadmeadows'>Broadmeadows
                        </option>
                        <option
                            value='Brooklyn'>Brooklyn
                        </option>
                        <option
                            value='Churton Park'>Churton Park
                        </option>
                        <option
                            value='Crofton Downs'>Crofton Downs
                        </option>
                        <option
                            value='Glenside'>Glenside
                        </option>
                        <option
                            value='Grenada North'>Grenada North
                        </option>
                        <option
                            value='Grenada Village'>Grenada Village
                        </option>
                        <option
                            value='Hataitai'>Hataitai
                        </option>
                        <option
                            value='Highbury'>Highbury
                        </option>
                        <option
                            value='Horokiwi'>Horokiwi
                        </option>
                        <option
                            value='Houghton Bay'>Houghton Bay
                        </option>
                        <option
                            value='Island Bay'>Island Bay
                        </option>
                        <option
                            value='Johnsonville'>Johnsonville
                        </option>
                        <option
                            value='Kaiwharawhara'>Kaiwharawhara
                        </option>
                        <option
                            value='Karaka Bays'>Karaka Bays
                        </option>
                        <option
                            value='Karori'>Karori
                        </option>
                        <option
                            value='Kelburn'>Kelburn
                        </option>
                        <option
                            value='Khandallah'>Khandallah
                        </option>
                        <option
                            value='Kilbirnie'>Kilbirnie
                        </option>
                        <option
                            value='Kingston'>Kingston
                        </option>
                        <option
                            value='Lyall Bay'>Lyall Bay
                        </option>
                        <option
                            value='Maupuia'>Maupuia
                        </option>
                        <option
                            value='Melrose'>Melrose
                        </option>
                        <option
                            value='Miramar'>Miramar
                        </option>
                        <option
                            value='Moa Point'>Moa Point
                        </option>
                        <option
                            value='Mornington'>Mornington
                        </option>
                        <option
                            value='Mount Victoria'>Mount Victoria
                        </option>
                        <option
                            value='Newlands'>Newlands
                        </option>
                        <option
                            value='Newtown'>Newtown
                        </option>
                        <option
                            value='Ngaio'>Ngaio
                        </option>
                        <option
                            value='Ngauranga'>Ngauranga
                        </option>
                        <option
                            value='Northland'>Northland
                        </option>
                        <option
                            value='Ohariu'>Ohariu
                        </option>
                        <option
                            value='Oriental Bay'>Oriental Bay
                        </option>
                        <option
                            value='Owhiro Bay'>Owhiro Bay
                        </option>
                        <option
                            value='Paparangi'>Paparangi
                        </option>
                        <option
                            value='Pipitea'>Pipitea
                        </option>
                        <option
                            value='Rongotai'>Rongotai
                        </option>
                        <option
                            value='Roseneath'>Roseneath
                        </option>
                        <option
                            value='Seatoun'>Seatoun
                        </option>
                        <option
                            value='Southgate'>Southgate
                        </option>
                        <option
                            value='Strathmore Park'>Strathmore Park
                        </option>
                        <option
                            value='Takapu Valley'>Takapu Valley
                        </option>
                        <option
                            value='Tawa'>Tawa
                        </option>
                        <option
                            value='Te Aro'>Te Aro
                        </option>
                        <option
                            value='Thorndon'>Thorndon
                        </option>
                        <option
                            value='Vogeltown'>Vogeltown
                        </option>
                        <option
                            value='Wadestown'>Wadestown
                        </option>
                        <option
                            value='Wellington Central'>Wellington Central
                        </option>
                        <option
                            value='Wilton'>Wilton
                        </option>
                        <option
                            value='Woodridge'>Woodridge
                        </option>
                        </select>
                    <br />

                    <label> Email: </label>
                        <input 
                            type='text' 
                            name='email' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Photo: </label>
                        <input 
                            type='text' 
                            name='photo' 
                            onChange={this.handleChange} />
                    <br />

                    <input 
                        type="submit" 
                        value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterWalker