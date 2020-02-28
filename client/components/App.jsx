import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import DogList from './DogList'
// import DogProfile from './DogProfile'
// import Register from './Register'
import RegisterOwner from './RegisterOwner'
import RegisterWalker from './RegisterWalker'
import WalkerProfile from './WalkerProfile'


const App = () => {
  return (
    <Router>
    <React.Fragment>
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/register/owner" component={RegisterOwner}/>
    <Route path="/register/walker" component={RegisterWalker}/>
    <Route path="/login" component={Login}/>
    <Route path="/doglist" component={DogList}/>
    <Route path = "/walker" component ={WalkerProfile}/>
    {/* <Route path="/dogprofile" component={DogProfile}/> */}
    <Footer />
    </React.Fragment>
    </Router>
  )
}

export default App


//commented out DogProfile, as component got deleted in merge