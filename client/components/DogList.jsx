import React from 'react'
import { getDogs } from '../api/dogApi'

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

        console.log(this.state.dogList)

    }

    render() {
        return (
            <div>
                {this.state.dogList.map(dog => {
                    return (
                        <div>
                            <img src={dog.photo} />
                            <h1>{dog.name}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default DogList