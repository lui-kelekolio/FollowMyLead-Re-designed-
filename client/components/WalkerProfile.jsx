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
            <div className = "profile-container">
                <div className="profile-heading">My Walker Profile</div>
                <img className="profile-picture" src={this.state.walker.photo} />
                <h3>Location: {this.state.walker.location}</h3>
                <br/>
                
                
                <div className="profile-info">
                {this.state.walker && 
                    <>
                        <h1>{this.state.walker.first_name} {this.state.walker.last_name} </h1>
                        
                        
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam aperiam exercitationem distinctio maiores accusamus deserunt eum iure quod, sint nisi! Ipsam deleniti laboriosam, vitae eum placeat eaque maiores distinctio dolorum impedit sint tenetur accusamus libero necessitatibus neque cum officia laudantium beatae unde dolore deserunt ratione iusto. Quidem, temporibus obcaecati?</p>
                        
                    </>
                    
                } 
                
                <h2>email:{this.state.walker.email}</h2>
                <Link className="button" to={`/walker/${this.state.walker.id}/edit`}>Edit Profile</Link>
                
                
                <Link className="button" to ='/doglist'>See the Dogs!</Link>
                </div>
                
            </div>
        )

    }
}


export default WalkerProfile