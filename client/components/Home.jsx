import React from "react"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import About from './About'
import WhoAreWe from './WhoAreWe'



class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                    <div className="hero-image">
                        <div className="hero-text"></div>
                        <img className="home-image" src="/images/ice-dog.jpg"
                            alt="hero-dog-image" />
                        <div className="hero-page-headline">
                            <div className="home-page-headline">Follow My Lead!</div>
                            <div className="home-page-ptag">Partnering People and Pooches!</div>

                            <div className="register-buttons">
                            <Link className="button" to='/Register/Owner' >Register to have your dog walked</Link>
                            <Link className="button" to='/Register/Walker' >Register to walk a dog</Link>
                        </div>

                        </div>

                    </div>
                <WhoAreWe />
                <About />

                


                </main>
                <Footer />
            </>
        )
    }



}




export default Home