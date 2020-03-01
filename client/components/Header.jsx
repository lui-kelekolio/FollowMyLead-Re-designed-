import React from "react"
import Nav from './Nav'
import { Link } from 'react-router-dom';
import { logOff } from 'authenticare/client';

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logedin: false
    }
    this.handleClick.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()
    if (this.state.logedin) {
      this.setState({
        logedin: false
      }) else {
        this.setState({
          logedin: true
        })
      }

    }
  }

  render() {
    return (
      <div className="header">
        <h1>Follow My Lead</h1>
        <button>
          <Link className="button-basic" to="/">
            Home
          </Link>
        </button>
        {this.state.logedin ?
          <IfNotAuthenticated>
            <button onClick={this.handleClick}>
              <Link className="button-basic" to="/Login">
                Login
              </Link>
            </button>
          </IfNotAuthenticated>
          :
          <IfAuthenticated>
            <button onClick={this.handleClick}>
              <Link to="#" onClick={logOff}>
                Logout
              </Link>
            </button>
          </IfAuthenticated>

        }
      </div>
    );
  }

}

export default Header;
