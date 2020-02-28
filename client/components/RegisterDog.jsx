import React from "react"


import { getDog } from '../api/dogApi'

class RegisterDog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '', 
            owner_id: '', 
            feedback_id: '', 
            name: '', 
            breed: '', 
            sex: '', 
            age: '', 
            size: '', 
            activity_requirements: '',
            good_with_other_dogs: '',
            special_requirements: '',
            photo: '',
            vet_name: '',
            vet_contact: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Dog Registration Form</h1>
                    <br />
                    <label> Name:
                        <input type='text' name='Name' onChange={this.handleChange} placeholder='Name' />
                    </label>
                    <br />
                    <label> Breed:
                        <input type='text' name='Breed' onChange={this.handleChange} placeholder='Breed' />
                    </label>
                    <br />
                    <label> Sex:
                        <input type='text' name='Sex' onChange={this.handleChange} placeholder='Sex' />
                    </label>
                    <br />
                    <label> Age:
                        <input type='text' name='Age' onChange={this.handleChange} placeholder='Age' />
                    </label>
                    <br />
                    <label> Size:
                        <input type='text' name='Size' onChange={this.handleChange} placeholder='Size' />
                    </label>
                    <br />
                    <label> Activity Requirements:
                        <input type='text' name='Activity Requirements' onChange={this.handleChange} placeholder='Activity Requirements' />
                    </label>
                    <br />
                    <label> Good with other Dogs:
                        <input type='text' name='Good with other Dogs' onChange={this.handleChange} placeholder='Good with other Dogs' />
                    </label>
                    <br />
                    <label> Special Requirements:
                        <input type='text' name='Special Requirements' onChange={this.handleChange} placeholder='Special Requirements' />
                    </label>
                    <br />
                    <label> Photo:
                        <input type='text' name='photo' onChange={this.handleChange} placeholder='Photo' />
                    </label>
                    <br />
                    <label> Vet Name:
                        <input type='text' name='Vet Name' onChange={this.handleChange} placeholder='Vet Name' />
                    </label>
                    <br />
                    <label> Vet contact:
                        <input type='text' name='Vet contact' onChange={this.handleChange} placeholder='Vet contact' />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterDog

