import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Register from './Register'


const App = () => {
  return (
    <Router>
    <React.Fragment>
    <Header />
    <Route exact path="/" component={Home}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>
    <Footer />
    </React.Fragment>
    </Router>
  )
}

export default App
