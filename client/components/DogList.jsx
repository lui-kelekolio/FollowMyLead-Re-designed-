import React from 'react'
import {getDogs} from '../Api/dogApi'

class DogList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:[],
            photo: []
        }
    }

    componentDidMount() {

        getDogs()
        .then(dogs => {

            this.setState({
                name: dogs,
                photo: dogs
            })
        })

        console.log(this.state.dogs)
    }

    render() {
        return(
        <div className='doglist'>
            {this.state.photo.map(dog => {
                console.log(dog.photo)
                return <img className='dogphoto' src={dog.photo} />
            })}

            {this.state.name.map(dog => {
                return <p>{dog.name}</p>
            })}
        </div>
         )}
}

export default DogList