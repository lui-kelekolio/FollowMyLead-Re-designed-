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
                 <h1>Edit Dog Registration Form</h1>
                <form className='form' onSubmit={this.handleSubmit}>
                   
                    <br />
                    <label> Name: </label>
                    <br />
                        <input className='input'
                        type='text' 
                        name='Name' 
                        onChange={this.handleChange} />
                    <br />

                    <label> Photo: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='photo' 
                            onChange={this.handleChange} 
                            placeholder='Upload File' />
                    <br />

                    <label> Breed: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='Breed' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Sex: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='Sex' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Male'>Male
                        </option>
                        <option 
                            value='Female'>Female
                        </option>
                        </select>
                    <br />

                    <label> Age: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='Age' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Puppy'>Puppy
                        </option>
                        <option 
                            value='Adolescent'>Adolescent
                        </option>
                        <option 
                            value='Adult'>Adult
                        </option>
                        <option 
                            value='Senior'>Senior
                        </option>
                        </select>
                    <br />
                    
                    <label> Size: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='Size' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='small'>Small 9kg or less
                        </option>
                        <option 
                            value='medium'>Medium 10-22kg
                        </option>
                        <option 
                            value='large'>Large 22kg or more 
                        </option>
                        </select>
                    <br />

                    <label> Activity Requirements: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='Activity Requirements' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='30mins'>30-45 minutes
                        </option>
                        <option 
                            value='45mins'>45-60 minutes
                        </option>
                        <option 
                            value='60mins'>60-90 minutes
                        </option>
                        </select>
                    <br />

                    <label> Good With Other Dogs: </label>
                    <br />
                        <select className='input'
                            type='text' 
                            name='Good with other Dogs' 
                            onChange={this.handleChange} >
                        <option 
                            value='select'>select
                        </option>
                        <option 
                            value='Yes'>Yes
                        </option>
                        <option 
                            value='No'>No
                        </option>
                        </select>
                    <br />

                    <label> Special Requirements: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='Special Requirements' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Vet Practice: </label>
                    <br />
                        <input className='input'
                            type='text'    
                            name='Vet Practice' 
                            onChange={this.handleChange} />
                    <br />

                    <label> Vet Contact: </label>
                    <br />
                        <input className='input'
                            type='text' 
                            name='Vet contact' 
                            onChange={this.handleChange} />
                    <br />
                    <br />
                    <input className='submit'
                        type="submit" 
                        value="Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterDog

