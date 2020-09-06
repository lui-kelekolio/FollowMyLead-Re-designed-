import React from 'react';


function About() {
  return (
    <div className="about">
      <h1 className="page-title">About us! </h1>
      <div className="group-photo-container">
      <img className="group-photo1" src="images/Group_photo.jpg" />
      {/* <img className="group-photo" src="images/Group-photo-2.jpg" /> */}
      </div>
      <div className="blurb-container">
        <div className="blurb-text">
          <p>Rich, Izzy, Josh, Seb, Lui, Scott.</p>
          <p>We are a group of web development students at EDA Wellington.  We love dogs and coding, and decided to combine these interests by
          building 'Follow My Lead', a platform where dog-less dog lovers and
          busy dog owners can meet to arrange dog walks!</p>
          
        </div>
      </div>
      <br />
      <br />
      <div>
      </div>
    </div>
  );
}

export default About;
