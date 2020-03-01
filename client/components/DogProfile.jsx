import React from 'react'
import { getDog } from '../api/dogApi'
import { getOwner } from '../api/ownerApi'
import { getDecodedToken } from 'authenticare/client'
import { getUserDetails } from '../api/walkerApi'
import { Link } from 'react-router-dom'
import { send } from 'emailjs-com'



class DogProfile extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            photo: '',
            name: '',
            feedback_id: '',
            breed: '',
            sex: '',
            size: '',
            activity_requirements: '',
            good_with_other_dogs: '',
            special_requirements: '',
            vet_name: '',
            vet_contact: '',
            owner_id: 0,
            owner_name: '',
            owner_email: '',
            user_id: getDecodedToken().id,
            walker_email: '',
            walk_the_dog: false,
            walker_id: 0

        }
        this.handleClick = this.handleClick.bind(this);
        this.handleWalk = this.handleWalk.bind(this);
    }

    componentDidMount() {
        const walkerID = getUserDetails(this.state.user_id)
        .then(user => {
            console.log('walkerMail=', user.walker.email)
            this.setState({
                walker_id: user.walker.id
            })
        })

        getDog(this.props.match.params.id)
            .then(dog => {
                console.log('ownerID=', dog.owner_id)
                this.setState({
                    photo: dog.photo,
                    name: dog.name,
                    feedback_id: dog.feedback_id,
                    breed: dog.breed,
                    sex: dog.sex,
                    size: dog.size,
                    activity_requirements: dog.activity_requirements,
                    good_with_other_dogs: dog.good_with_other_dogs,
                    special_requirements: dog.special_requirements,
                    vet_name: dog.vet_name,
                    vet_contact: dog.vet_contact,
                    owner_id: dog.owner_id,
                    walker_id: walkerID
                })
            })
    }

    handleWalk(e) {
        e.preventDefault()
        // console.log('walkerID=', this.state.walker_id)

        getOwner(this.state.owner_id)
            .then(owner => {
                console.log('ownerMail=', owner.email)
                this.setState({
                    owner_email: owner.email
                })
            })
        getUserDetails(this.state.user_id)
            .then(user => {
                console.log('walkerMail=', user.walker.email)
                this.setState({
                    walker_email: user.walker.email
                })
            })
        this.setState({ walk_the_dog: true })
    }

    handleClick(e) {
        e.preventDefault()
        console.log('owner_email: ', this.state.owner_email, 'walker_email: ', this.state.walker_email)

        //code snippet for emailjs
        const template_params = {
            owner_email: this.state.owner_email,
            owner_name: this.state.owner_name,
            walker_email: this.state.walker_email,
        }
        const userID = 'user_Zf2pkHv28X6ZJ5OWbpWqp'
        const service_id = "default_service";
        const template_id = "walker_to_owner";
        send(service_id, template_id, template_params, userID)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text)

            }, function (error) {
                console.log('FAILED...', error)
            })
    }

//Profile link button nto working - needs to pass props from dog page
    render() {
        return (
            <div className='dogprofiledisplay'>
                <button className='sendMail' name='sendButton' onClick={this.handleClick}>Send request to the dog's owner</button>
                <button className='walkDog' name='walkDogButton' onClick={this.handleWalk}>I would like to walk this dog</button>
                {this.state.walk_the_dog && <p>You would like to walk this dog. Click the request button to contact the owner</p>}
                <button><Link to ='/doglist'>Dog list</Link></button>
                <br />
                <button><Link to ={'/walker/' + this.state.walker_id}>Profile</Link></button>
                <h2>{this.state.name}</h2>
                <img className='dogprofilephoto' src={this.state.photo} />
                <h2>{this.state.breed}</h2>
                <h2>{this.state.sex}</h2>
                <h2>{this.state.size}</h2>
                <h2>{this.state.activity_requirements}</h2>
                <h2>{this.state.good_with_other_dogs}</h2>
                <h2>{this.state.special_requirements}</h2>
                <h2>{this.state.vet_name}</h2>
                <h2>{this.state.vet_contact}</h2>
            </div>
        )
    }

}

export default DogProfile 