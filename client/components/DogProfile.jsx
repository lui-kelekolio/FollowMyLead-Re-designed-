import React from 'react'
import { getDog } from '../api/dogApi'
import {Link} from 'react-router-dom'
// import {}


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
            vet_contact: ''
        }
    }

    componentDidMount() {

        getDog(this.props.match.params.id)
            .then(dog => {

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
                    vet_contact: dog.vet_contact
                })
            })
    }


    render() {
        return (
            <div className='dogprofiledisplay'>
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

                <Link to = {`/owner/${owner.id}`}><button>push here</button></Link>
            </div>
        )
    }

}

export default DogProfile 