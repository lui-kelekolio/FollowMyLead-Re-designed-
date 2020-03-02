import React from 'react';
import { getDogOwner, getDogs } from '../api/dogApi';
import { Link } from 'react-router-dom';

class DogList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            dogList: [],
        }
    }


    componentDidMount() {
        getDogs()
            .then(dogs => dogs)
            .then(dog => getDogOwner(dog.id).then(owner =>
                this.state.dogList.push(owner)
            ))


        console.log('dogList:', this.state.dogList)

        console.log(this.state.dogList)

    }

    render() {
        return (
            <div>
                {this.state.dogList.map(owner => {
                    console.log('owner: ', owner)
                    return (
                        <div className='doglist'>
                            <Link to={`/dog/${owner.dog.id}`}><img className='dogphoto' src={owner.dog.photo} /></Link>
                            <p>{owner.dog.name}</p>
                            <p>{owner.location}</p>
                        </div>
                    )
                })}
            </div>
        )

    }

}


export default DogList
