import React from 'react'
import { getDogs } from '../api/dogApi'
// import {getOwner} from '../api/ownerApi'
import { Link } from 'react-router-dom'
import { getOwner } from '../api/ownerApi'

class DogList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dogList: [],
        }
    }


    componentDidMount() {

        getDogOwner()
            .then(dog => {
                this.setState({
                    dogList: dog
                })

            })

        console.log('dogList:', this.state.dogList)

        console.log(this.state.dogList)

    }

    render() {
        return (
            <div>
                {this.state.dogList.map(owner => {
                    console.log('owner.dog: ', owner.dog)
                    return (
                        <div className='doglist'>
                            <Link to={`/dog/${dog.id}`}><img className='dogphoto' src={dog.photo} /></Link>
                            <p>{dog.name}</p>
                            <p>{dog.owner.location}</p>
                        </div>
                    )


                })}
            </div>
        )
    }
}

export default DogList