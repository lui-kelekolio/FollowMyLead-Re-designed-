import React from 'react'
import { getDog, returnFeedback } from '../api/dogApi'
import { getOwner } from '../api/ownerApi'
import { getDecodedToken } from 'authenticare/client'
import { getUserDetails } from '../api/walkerApi'
import { Link } from 'react-router-dom'
import { send } from 'emailjs-com'
import { getFeedback } from '../api/dogFeedbackApi'



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
            walker_id: 0,
            request_sent: false,
            walker_link: 'http://localhost:3000/#/walker/',
            suburb: '',
            feedback: '',
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleWalk = this.handleWalk.bind(this);
    }

    componentDidMount() {

        console.log(this.state)
        getUserDetails(this.state.user_id)
            .then(user => {
                this.setState({ walker_id: user.walker.id })
            })

        getDog(this.props.match.params.id)
            .then(dog => {
                getOwner(dog.owner_id)
                .then(owner => this.setState({ 
                    suburb: owner.location 
                }))
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
                })
            })
        // getDogFeedback(this.state.feedback_id)
        // .then(feedback => {
        //     this.setState({
        //         feedback_id: feedback.id
        //     })
        // })
        returnFeedback(this.props.match.params.id)
         .then(feedbackInfo => {
             this.setState({
                 feedback: feedbackInfo
             })
         })
    }

    handleWalk(e) {
        e.preventDefault()

        getOwner(this.state.owner_id)
            .then(owner => {
                this.setState({
                    owner_email: owner.email,
                    owner_name: owner.first_name
                })
            })
        getUserDetails(this.state.user_id)
            .then(user => {
                this.setState({
                    walker_email: user.walker.email,
                    walker_link: this.state.walker_link + user.walker.id
                })
            })
        this.setState({ walk_the_dog: true })
    }

    handleClick(e) {
        e.preventDefault()
        //code snippet for emailjs
        const template_params = {
            owner_email: this.state.owner_email,
            owner_name: this.state.owner_name,
            walker_link: this.state.walker_link,
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
        this.setState({
            request_sent: true,
            walk_the_dog: false
        })
    }

    render() {
        return (
            <div className = "profile-container">
                <div className="profile-heading">My Dog Profile</div>
                <img className="profile-picture" src={this.state.photo} />
                <p>Suburb: {this.state.suburb}</p>
                <br/>

                <div className="profile-info">
               
                
                <p>Name: {this.state.name}</p>
                
                <p>Breed: {this.state.breed}</p>
                <p>Sex: {this.state.sex}</p>
                <p>Size: {this.state.size}</p>
                <p>Walk Length: {this.state.activity_requirements}</p>
                <p>Good with other dogs: {this.state.good_with_other_dogs}</p>
                <p>Special Requirements: {this.state.special_requirements}</p>
                <p>Vet Practice: {this.state.vet_name}</p>
                <p>Vet Contact: {this.state.vet_contact}</p>
                <p>Suburb: {this.state.suburb}</p>
                <p>Feedback: {this.state.feedback.feedback}</p>

                </div>

                <button className="button" name='sendButton' onClick={this.handleClick}>Send request to the dog's owner</button>
                <button className="button" name='walkDogButton' onClick={this.handleWalk}>I would like to walk this dog</button>
                {this.state.walk_the_dog && <p>You would like to walk this dog. Click the request button to contact the owner</p>}
                {this.state.request_sent && <p>Great, your request has been sent to this dog's owner. They should be in touch soon!</p>}
                <Link className="button" to='/doglist'>Dog list</Link>
                <br />
                <Link className="button" to={'/walker/' + this.state.walker_id}>Profile</Link>

            </div>
        )
    }

}

export default DogProfile 