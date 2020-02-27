import React from 'react'
import {getDogs} from '../Api/index'

class DogProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:[],
            dogList: []
        }
    }

    componentDidMount() {

        getDogs()
        .then(dogs => {

            this.setState({
                name: dogs,
                dogList: dogs
            })
        })

        console.log(this.state.dogs)
    }

    render() {
        return(
        <div className='dogprofilephoto'>
            {this.state.dogList.map(dog => {
                console.log(dog.photo)
                return <img src={dog.photo} />
            })}

            {this.state.name.map(dog => {
                return <p>{dog.name}</p>
            })}
        </div>
         )}
}

export default DogProfile