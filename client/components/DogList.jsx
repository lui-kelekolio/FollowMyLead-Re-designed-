import React from 'react'
import { getDogs } from '../api/dogApi'
import {getOwner} from '../api/ownerApi'
import {Link} from 'react-router-dom'

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

        console.log('dogList:', this.state.dogList)

        console.log(this.state.dogList)

    }

    render() {
        return (
            <div>
                {this.state.dogList.map(dog => {
                    return (
                        <div className='doglist'>
                           <Link to = {`/dog/${dog.id}`}><img className='dogphoto' src={dog.photo} /></Link>
                           <p>{dog.name}</p>
                           
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DogList