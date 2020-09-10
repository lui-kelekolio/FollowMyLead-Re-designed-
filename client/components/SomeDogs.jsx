import React from 'react';
import { getDogOwner, getDogs } from '../api/dogApi'
import { Link } from 'react-router-dom';

class SomeDogs extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dogList: [],
        }
    }

    componentDidMount() {
        getDogs()
            .then(dogs  => {
                this.setState({
                    dogList: dogs
                })
            })
    }

    render() {
        return (
        <div className="some-dogs">
            <h1 className="page-title">Meet some of our customers!</h1>

            <div className="dog-align">
                {this.state.dogList.map(dog => {
                    return (
                        <div className='doglist'>
                            <img className='dogphoto' src={dog.photo} />
                            <p>{dog.name}</p>
                            <p>{dog.location}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }

}

export default SomeDogs