import React from 'react'
import {getDogs} from '../Api/dogApi'
import {getDog} from '../Api/dogApi'

class DogProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: [],
            name: [],
            feedback_id: [],
            breed: [],
            sex: [],
            size: [],
            activity_requirements: [],
            good_with_other_dogs: [],
            special_requirements: [],
            vet_name: [],
            vet_contact: []
        }
    }

    componentDidMount() {

        getDogs()
        .then(dogs => {
            this.setState({
                photo: dogs,
                name: dogs,
            })
        })

    
    

        getDog()
        .then(dog => {
            this.setState({
                photo: dog,
                name: dog,
                feedback_id: dog,
                breed: dog,
                sex: dog,
                size: dog,
                activity_requirements: dog,
                good_with_other_dogs: dog,
                special_requirements: dog,
                vet_name: dog,
                vet_contact: dog
            })
        })


}




    render() {
        return(
        <div className='doglist'>
            {this.state.photo.map(dog => {
                return <img className='dogphoto' src={dog.photo} />
            })}

            {this.state.name.map(dog => {
                return <p>{dog.name}</p>
            })}
        </div>
         )}

         render() {
            return(
            <div className='doglist'>
                {this.state.photo.map(dog => {
                    return <img className='dogphoto' src={dog.photo} />
                })}
    
                {this.state.name.map(dog => {
                    return <p>{dog.name}</p>
                })}
    
                {this.state.size.map(dog => {
                    return <p>{dog.size}</p>
                })}
    
                {this.state.sex.map(dog => {
                    return <p>{dog.sex}</p>
                })}
                
                {/* {this.state.breed.map(dog => {
                    return <p>{dog.breed}</p>
                })} 
    
                {this.state.age.map(dog => {
                    return <p>{dog.age}</p>
                })}  */}
    
                {this.state.activity_requirements.map(dog => {
                    return <p>{dog.activity_requirements}</p>
                })}
    
                   {this.state.good_with_other_dogs.map(dog => {
                    return <p>{dog.good_with_other_dogs}</p>
                })}
    
                   {this.state.special_requirements.map(dog => {
                    return <p>{dog.special_requirements}</p>
                })}
    
                   {this.state.vet_name.map(dog => {
                    return <p>{dog.vet_name}</p>
                })}
    
                   {this.state.vet_contact.map(dog => {
                    return <p>{dog.vet_contact}</p>
                })}
                   
            </div>
             )}
         
}

export default DogProfile