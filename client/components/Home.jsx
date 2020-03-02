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
                    <img className="home-image" src="/images/dog-on-lead.jpeg"
                    alt="hero-dog-image" />
                    <div className="home-page-headline">Follow My Lead!</div>
                    <div className="home-page-ptag">Partnering People and Pooches!</div>
                </div>


                <div className="blurb-container">
                    <div className="blurb-headline">Who we are? </div>
  <div className="blurb-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptates esse excepturi, impedit nemo delectus voluptatibus, labore officia vel facilis incidunt quae asperiores aut dolorem enim similique ipsum ad ratione molestiae! Repellat molestias porro nostrum cum in perspiciatis eveniet placeat officiis. Consequuntur earum officia iure animi quia quidem architecto possimus aut, deserunt quibusdam praesentium odit, est, dignissimos velit dolorem sequi corrupti. Eius, nulla impedit a voluptates magnam sed earum ducimus numquam repellendus nostrum saepe iusto, quae sequi, explicabo velit eos repellat dolor? Reprehenderit laboriosam reiciendis dolore repellendus, incidunt quo natus enim exercitationem, expedita optio 
  <br/>
  <br/>
  assumenda, temporibus fugit? Dolorum tenetur quod inventore quidem harum excepturi fugit! Distinctio quasi suscipit explicabo quibusdam porro quaerat eligendi saepe at eius, nam cum nobis veritatis perspiciatis voluptatum obcaecati rem facilis sit eos, possimus ullam nulla nesciunt fugiat similique! Magni, quis mollitia labore perferendis ipsum tenetur quos exercitationem at consequuntur vero. Accusamus illo unde incidunt explicabo quia autem provident corrupti totam reiciendis aspernatur optio est maiores soluta officia veniam temporibus consectetur fugit accusantium eaque voluptatibus quis itaque, pariatur earum possimus! Adipisci, ipsa tenetur numquam nam alias aliquam neque maiores eaque expedita ad suscipit nulla ducimus aut aspernatur quidem necessitatibus fuga dolorum voluptatum dolores fugit quam officia assumenda! Veritatis nihil rem nostrum, ipsa consequuntur a sunt aspernatur, ipsam alias maxime deserunt sapiente accusamus cupiditate sint distinctio quis
  <br/>
  <br/>
  quisquam repudiandae molestias repellat recusandae. Fugit, nulla. Autem earum non minima eos fuga saepe, beatae sapiente odit rem voluptatem dicta soluta ea dolore eaque repudiandae quibusdam natus libero dolorum reiciendis enim iste vero et. Blanditiis quasi ab accusantium explicabo iste facere nemo nisi debitis. Voluptatum aut nam voluptas aspernatur eveniet repellat? Et sit officiis aliquam eveniet perspiciatis voluptates corporis veritatis aperiam dolorum dolorem reprehenderit, est quis explicabo optio voluptatem fugit ut, nihil illum fuga fugiat commodi. Asperiores quisquam dignissimos sunt?</div>
</div>

                

                


       
            
            
            
            
            <div className="register-buttons">

                <div className="button">
                <Link className="button-basic" to = '/Register/Owner' >Register as an owner</Link>
                </div>

                <div className="button">
                <Link className="button-basic" to = '/Register/Walker' >Register as a Walker</Link>
                </div>

            </div>
            
            
            
        </main>
        </>
    )
}



}




export default Home