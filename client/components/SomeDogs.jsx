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
            .then(dogs => {
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
                    <div>
                        <div className='dog-customers'>
                            <div className="dog-customer-photo">     
                                <img className='dog-customer' src={dog.photo} />
                            </div>
                        </div>
                        <div className="dog-customer-content">
                            <div className="dog-customer-name">
                                <p className="dog-customer-ptag-title">{dog.name}</p>
                            </div>
                            <div className="dog-customer-bio">
                                <p className="dog-customer-ptag">{dog.special_requirements}</p>
                            </div> 
                        </div>
                        <div className="dog-customer-content">
                            <div className="dog-customer-ptag-owner">
                                <p >{dog.owner_id}</p>
                            </div>    
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
    }

}

export default SomeDogs