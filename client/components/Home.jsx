import React from "react"
import {Link} from 'react-router-dom'



class Home extends React.Component{
    constructor() {
        super()

        this.state ={}
    }


render(){
    return(
        <>
        <main>

                <div className="hero-image">
                    <div className="hero-text"></div>
                    <img className="home-image" src="/images/dog-background2.jpg"
                    alt="hero-dog-image" />
                    <div className="home-page-headline">Follow My Lead!</div>
                    <div className="home-page-ptag">Partnering People and Pooches!</div>

                    <div className="register-buttons">
                        <Link className="button" to='/Register/Owner' >Register your Dog</Link>
                        <Link className="button" to='/Register/Walker' >Register to Dog Walk</Link>
                    </div>

                </div>


                <div className="blurb-container">
                    <div className="blurb-headline">Who are we? </div>
                    <br/>
  <div className="blurb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptates esse excepturi, impedit nemo delectus voluptatibus, labore officia vel facilis incidunt quae asperiores aut dolorem enim similique ipsum ad ratione molestiae! Repellat molestias porro nostrum cum in perspiciatis eveniet placeat officiis. Consequuntur earum officia iure animi quia quidem architecto possimus aut, deserunt quibusdam praesentium odit, est, dignissimos velit dolorem sequi corrupti. Eius, nulla impedit a voluptates magnam sed earum ducimus numquam repellendus nostrum saepe iusto, quae sequi, explicabo velit eos repellat dolor? Reprehenderit laboriosam reiciendis dolore repellendus, incidunt quo natus enim exercitationem, expedita optio 
  <br/>
 </div>
</div>

                
</main>
        </>
    )
}



}




export default Home