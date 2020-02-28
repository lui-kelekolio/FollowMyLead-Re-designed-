import React from "react"
import { getWalker } from '../Api/walkerApi'


class WalkerProfileEdit extends React.Component {
    constructor(){
        super()

        this.state = {
            walker: {}
        }
    }


componentDidMount() {
    getWalker(this.props.match.params.id)
    .then(walkerInfo =>{
        this.setState({
            walker:walkerInfo
        })
    })
}


render() {
 
    return(
        <div>
         <form>
        <input type = 'text' placeholder = 'First name'/>
        <input type = 'text' placeholder = 'Last name'/>
        <input type = 'text' placeholder = 'email'/>
        <input type = 'text' placeholder = 'Location'/>
        <input type = 'text' placeholder = 'Blurb'/>
        <input type = 'text' placeholder = 'Image URL'/>
        </form>
        </div>
    )
}



}
export default WalkerProfileEdit