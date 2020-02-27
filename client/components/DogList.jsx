
import React from 'react'
import {getDogs} from '../api/index'

class DogList extends React.Component {
    
constructor(props) {
    super(props)
    this.state = {
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
                
                return <img src={dog.photo} />
            })}
        </div>
    )}
}

export default DogList