import React from "react"
import { getWalker } from '../api/walkerApi'
import {Link} from 'react-router-dom'

class WalkerProfile extends React.Component {
    constructor() {
        super()

        this.state = {
            walker: {}
        }
    }



    componentDidMount() {
        getWalker(this.props.match.params.id)
            .then(walkerInfo => {
                this.setState({
                    walker: walkerInfo
                })
            })
    }


    render() {

        return (
            <div>
                <h1>Walker Profile Page</h1>
                <button><Link to={`/walker/${this.state.walker.id}/edit`}>Edit</Link></button>
                <br />
                <br />
                <button><Link to ='/doglist'>Dog list</Link></button>
                <br />
                <br />
                {this.state.walker && (
                    <>
                        <h1>{this.state.walker.first_name} {this.state.walker.last_name} </h1>
                        <h2>email:{this.state.walker.email}</h2>
                        <h3>Location: {this.state.walker.location}</h3>
                        <p>{this.state.walker.blurb}</p>
                        <img src={this.state.walker.photo} />
                    </>
                )} 
            </div>
        )

    }
}


export default WalkerProfile