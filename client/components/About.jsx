import React from 'react';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="about">
      <h1 className="page-title">About us! </h1>

      <div className="group-photo-container">
      <img className="group-photo1" src="images/Group_photo.jpg" />
      <div className="overlay1">
        <div className="link-to-about-us">
        <Link to='/About-Us' >More About Us</Link>
        </div>
      </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="blurb-container">
          <div className="blurb-text">
    
            <p>We are a group of web development students at EDA Wellington.  We love dogs and coding, and decided to combine these interests by
            building 'Follow My Lead', a platform where dog-less dog lovers and
            busy dog owners can meet to arrange dog walks!</p>
    
            
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

export default About;
