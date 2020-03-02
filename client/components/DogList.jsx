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
            .then(dogs => {
                this.setState({
                    dogList: dogs
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.dogList.map(dog => {
                    return (
                        <div className='doglist'>
                            <Link to={`/dog/${dog.id}`}><img className='dogphoto' src={dog.photo} /></Link>
                            <p>{dog.name}</p>
                            <p>{dog.location}</p>
                        </div>
                    )
                })}
            </div>
        )

    }

}


export default DogList
