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
                <p>(From Left to Right)</p>
                <h2>Rich, Scott, Izzy, Seb, Lui, Josh.</h2>

                </div>
            </div>
        </div>
      <br />
      <br />

    </div>
  );
}

export default AboutUs;