import React from "react"

//Josh Sat 29/2

class WalkerProfileEdit extends React.Component {
    constructor(){
        super()

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            blurb: '',
            location: '',
            photo:''
        }
    }

handleChange = e => {
    console.log('line 20, handleChange in walkerProfileEdit runs')
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {


}


    render() {

        return (
            <div>
                <h1>Edit Walker Details</h1>
                <form onSubmit = {this.handleSubmit}>
                    <br />
                    <label> First name:
        <input type='text' placeholder='First name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Last name:
        <input type='text' placeholder='Last name' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> email:
        <input type='text' placeholder='email' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Location:
        <input type='text' placeholder='Location' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Blurb:
        <input type='text' placeholder='Blurb' onChange={this.handleChange} />
                    </label>
                    <br />
                    <label> Photo:
        <input type='text' placeholder='Image URL' onChange={this.handleChange} />
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" onChange={this.handleChange} />
                </form>
            </div>
        )
    }



}
export default WalkerProfileEdit