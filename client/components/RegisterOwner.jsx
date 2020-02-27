import React from "react"

class RegisterOwner extends React.Component{
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            location: '',
            email: '',
            photo: ''
        }
    }



    render() {
        return (
            <div>
                <form>
                    <h1>Owner form</h1>
                    <hr />
                    <label> First name:
                        <input type = 'text' placeholder = 'First name'/>
                    </label>
                    <br />
                    <label> Last name:
                        <input type = 'text' placeholder = 'Last name'/>
                    </label>
                    <br />
                    <label> Location
                        <input type = 'text' placeholder = 'Location'/>
                    </label>
                    <br />
                    <label> email:
                        <input type = 'text' placeholder = 'email'/>
                    </label>
                    <br />
                    <label> Photo:
                        <input type = 'text' placeholder = 'Photo'/>
                    </label>
                    <br />
                    <input type= "submit" value= "Submit" />
                </form>
            </div>
        )
    }



}
export default RegisterOwner