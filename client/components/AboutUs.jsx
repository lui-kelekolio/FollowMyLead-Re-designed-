import React from 'react';
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className="about">
        <h1 className="page-title">The creators of Follow My Lead!</h1>
      
        <div className="about-group-photo-container">
            <img className="about-group-photo1" src="images/Group-photo-2.jpg" />

            <div className="blurb-container">
                <div className="blurb-text">
                    <h3>Richard, Scott, Izzy, Sebastian, Lui, Joshua</h3>
                    <p>(From left to right)</p>
                </div>

                <div className="body-content">
                    <p>We are a group of graduate web developers from En Spiral Dev Academy. Follow My Lead is a website application we created as our final group project. This idea was pitched to our class and from there the six of us decided that this idea was definitely worth creating for our final project. 
                        We spent ten consecutive twelve hour days working on this project, getting it ready to present to family, friends and potential employers. 
                        <br></br><br></br>
                        This website is not the original - I have decided to redesign the website itself to further improve my front-end skills. You may find a link to the original github repository here : </p>
                        <a className="fml-link" href="https://github.com/kahu-2020/Follow-My-Lead" >Follow My Lead</a>

        
                </div>
            </div>
        </div>

    </div>
  );
}

export default AboutUs;