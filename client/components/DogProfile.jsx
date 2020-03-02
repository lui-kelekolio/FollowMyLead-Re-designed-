import React from 'react';
import { getDog, returnFeedback } from '../api/dogApi';
import { getOwner } from '../api/ownerApi';
import { getDecodedToken } from 'authenticare/client';
import { getUserDetails } from '../api/walkerApi';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';

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
            walker_id: 0,
            request_sent: false,
            walker_link: 'http://localhost:3000/#/walker/',
            suburb: '',
            feedback: '',
        }
        this.handleClick = this.handleClick.bind(this);
        // this.handleWalk = this.handleWalk.bind(this);
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

    // handleWalk(e) {
    //     e.preventDefault()

    // //     getOwner(this.state.owner_id)
    // //         .then(owner => {
    // //             this.setState({
    // //                 owner_email: owner.email,
    // //                 owner_name: owner.first_name
    // //             })
    // //         })
    // //     getUserDetails(this.state.user_id)
    // //         .then(user => {
    // //             this.setState({
    // //                 walker_email: user.walker.email,
    // //                 walker_link: this.state.walker_link + user.walker.id
    // //             })
    // //         })
    // //     this.setState({ walk_the_dog: true })
    // // }

    handleClick(e) {
        e.preventDefault()
        this.setState({ request_sent: true })

        Promise.all([
            getOwner(this.state.owner_id),
            getUserDetails(this.state.user_id),
        ])
            .then(([owner, user]) => {

                //code snippet for emailjs
                const template_params = {
                    owner_email: owner.email,
                    owner_name: owner.first_name,
                    walker_link: this.state.walker_link + user.walker.id,
                }

                const userID = 'user_Zf2pkHv28X6ZJ5OWbpWqp'
                const service_id = "default_service";
                const template_id = "walker_to_owner";
                return send(service_id, template_id, template_params, userID)

            })
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch((error) => {
                console.log('FAILED...', error)
            })
    }


    render() {
        return (
            <div className="dogprofiledisplay">
                <button
                    className="sendMail"
                    name="sendButton"
                    onClick={this.handleClick}
                >
                    Send request to the dog's owner
                </button>
                <button>
                    <Link to="/doglist">Dog list</Link>
                </button>
                {this.state.request_sent && (
                    <p>
                        Great, your request has been sent to this dog's owner. They should
                        be in touch soon!
                    </p>
                )}
                <br />
                <button>
                    <Link to={'/walker/' + this.state.walker_id}>Profile</Link>
                </button>
                <img className="dogprofilephoto" src={this.state.photo} />
                <h2>Name: {this.state.name}</h2>
                <h2>Suburb: {this.state.suburb}</h2>
                <h2>Breed: {this.state.breed}</h2>
                <h2>Sex: {this.state.sex}</h2>
                <h2>Size: {this.state.size}</h2>
                <h2>Walk Length: {this.state.activity_requirements}</h2>
                <h2>Good with other dogs: {this.state.good_with_other_dogs}</h2>
                <h2>Special Requirements: {this.state.special_requirements}</h2>
                <h2>Vet Practice: {this.state.vet_name}</h2>
                <h2>Vet Contact: {this.state.vet_contact}</h2>
                <h2>Suburb: {this.state.suburb}</h2>
            </div>
        );
    }
}

export default DogProfile;
