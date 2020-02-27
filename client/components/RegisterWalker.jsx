import React from "react"

class RegisterWalker extends React.Component{
    constructor() {
        super()

        this.state = {
            first_name: '',
            last_name: '',
            blurb: '',
            location: '',
            email: '',
            photo: ''
        }
    }



    render() {
        return (
            <div>
                <form>
                    <h1>Walker form</h1>
                    <hr/>
                    <label> First name:
                        <input type = 'text' placeholder = 'First name'/>
                    </label>
                    <br />
                    <label> Last name:
                        <input type = 'text' placeholder = 'Last name'/>
                    </label>
                    <br />
                    <label> Blurb:
                        <input type = 'text' placeholder = 'Blurb'/>
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
export default RegisterWalker