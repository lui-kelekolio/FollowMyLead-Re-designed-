import React from 'react'
import { getOwner } from '../api/ownerApi'
import { Link } from 'react-router-dom'


class OwnerProfile extends React.Component {
  constructor(props) {
    super()

      this.state = {
        owner:{}
      }

    }


  componentDidMount() {

    getOwner(this.props.match.params.id)
      .then(ownerInfo => {
        console.log(ownerInfo)

        this.setState({
          owner: ownerInfo
        })
      })
  }

  render() {
    return (
      <div className="owner-profile-container">
        <h1>Owner Profile Page</h1>
        <br />
        {this.state.owner && 
          <>
            <h2>First Name: {this.state.owner.first_name}</h2>
            <h2>Last Name: {this.state.owner.last_name}</h2>
            <h2>Location: {this.state.owner.location}</h2>
            <h2>Email: {this.state.owner.email}</h2>
            <img src =  {this.state.owner.photo}/>
          </>
        }
      
        <Link to={'/owner/' + this.state.owner.id + '/edit'}>
        <button type = 'button'>Edit</button>
        </Link>

        <br />
        <br />
        <Link to="/register/dog">
          <button type="button">
            Register your dog
          </button>
        </Link>
      </div>
    )
  }




}


export default OwnerProfile