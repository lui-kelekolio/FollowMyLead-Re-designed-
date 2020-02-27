import React from "react"



class WalkerProfile extends React.Component {
    constructor(){
        super()

        this.state = {
            walker: {}
        }
    }



componentDidMount() {
    getWalker()
    .then(walkerInfo =>{
        this.setState({
            walker:walkerInfo
        })
    })
}


render() {
    
    return(
        <div>
          {this.state.walker.map(walker => {
              return <li key={walker.id} firstName = {walker.first_name}></li>
          })
          }
        </div>
    )
}

}
export default WalkerProfile