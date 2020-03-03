import React from 'react';

const imgStyle = {
  height:'5%',
  width:'40%' ,
  display : 'block',
  'margin-left' : '-20%', // half the width (and negative)
  'padding-left' : '50%'
}

function About() {
  return (
    <div className="about">
      <div className="blurb-container">
        <div className="blurb-headline">Who are we? </div>
        <br />
        
        <div className="blurb-text">
      We are a group of web development students at EDA Wellington. <br />
      We love dogs and coding,
      and decided to combine these interests by building 'Follow My Lead', a platform where dog-less dog lovers and busy dog owners can meet to arrange dog walks!
      <br />
      <br />
      Rich, Izzy, Josh, Seb, Lui, Scott.
        </div>
      </div>
      <br />
      <br />
      <div>
        <img style={imgStyle} src='images/Group_photo.jpg'/>
      </div>
    </div>
  );
}

export default About



