import React from "react"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import About from './About'
import WhoAreWe from './WhoAreWe'
import HowItWorks from "./HowItWorks"
import WhyUs from "./WhyUs"
import SomeDogs from "./SomeDogs"



class Home extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>

                <div className="overlay-container">
                    <img className="home-image" src="/images/ice-dog2.jpg"
                            alt="hero-dog-image"/>
                       
                        <div className="hero-image-opactiy-bar">
                            <div className="hero-page-headline">
                                
                                <div className="home-page-headline">
                                    <h1>Follow My Lead!</h1>
                                </div>

                                <div className="home-page-ptag">
                                    <h2>Partnering People and Pooches!</h2>
                                </div>

                                <div className="register-buttons">
                                <Link className="button" to='/Register/Owner' >Register to have your dog walked</Link>
                                <Link className="button" to='/Register/Walker' >Register to walk a dog</Link>
                                </div>

                            </div>
                        </div>
            </div>
                 

                
                <WhoAreWe />
                <HowItWorks />
                <SomeDogs />
                <WhyUs />
                <About />

                


                </main>
                <Footer />
            </>
        )
    }



}




export default Home