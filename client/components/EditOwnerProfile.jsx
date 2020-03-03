import React from 'react'
import { getOwner } from '../api/ownerApi'



class EditOwnerProfile extends React.Component {
  constructor() {
    super()

    this.state = {
          first_name: '', 
          last_name: '', 
          photo: '', 
          location: '', 
          email: ''

    }
  }

handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    photo: this.state.photo,
    location: this.state.location,
    email: this.state.email,
  })
}

render() {
  return(
    <div>
      <h1>Edit My Details</h1>
      <form className='form' onSubmit = {this.handleSubmit}>
      <img className="logoform" src="/images/Logo2.png" alt="logo" />
      <br/>
      <label> First name:
      <br />
      <input className='input' type = 'text' name='first_name' placeholder = 'First name' onChange = {this.handleChange} />
      </label>
      <br />
      <label> Last name:
      <br />
      <input className='input' type = 'text' name='last_name' placeholder = 'Last name' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Photo:
      <br />
      <input className='input' type = 'text' name='photo' placeholder = 'Photo URL' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Location:
      <br />
      <input className='input' type = 'text' name='location' placeholder = 'Location' onChange = {this.handleChange} />
      </label>
      <br/>
      <label> Email:
      <br />
      <input className='input' type = 'text' name='email' placeholder = 'Email' onChange = {this.handleChange} />
      </label>
      <br/>
      <br />
      <input className='input' type="submit" value="Submit"  />
      </form>
    </div>
  )
}

}

export default EditOwnerProfile