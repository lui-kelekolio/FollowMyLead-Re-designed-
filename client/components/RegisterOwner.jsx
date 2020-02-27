import React from "react"
import { addOwner } from '../api/owners'

class RegisterOwner extends React.Component{
    constructor(props) {
        super(props)

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
        addOwner(this.state)
    
      }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <h1>Owner form</h1>
                    <hr />
                    <label> First Name:
                        <input type='text' name='first_name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Last Name:
                    <input type='text' name='last_name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Location:
                    <input type='text' name='location' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> email:
                    <input type='text' name='email' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Photo:
                    <input type='text' name='photo' onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type= "submit" value= "Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterOwner