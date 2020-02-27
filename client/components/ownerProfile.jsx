
import React from 'react'
import {getOwner} from '../api/ownerApi'

class ownerProfile extends React.Component {
    
constructor(props) {
    super(props)
    this.state = {
        name: '',
        dogList: []
        }
    }


    componentDidMount() {

        getDogs()
        .then(dogs => {
          
            this.setState({
                dogList: dogs
            })
        })

        console.log(this.state.dogList)
     
    }

    render() {
    return (
        <div className='doglist'>
            {this.state.dogList.map(dog => {
                console.log(dog.name)
                return <img className='dogphoto' src={dog.photo} />
            })}

        {/* {this.state.dogList.map(dog => {
            return <h1>{dog.name}</h1>
        })} */}
        </div>
    )}
}

export default DogList