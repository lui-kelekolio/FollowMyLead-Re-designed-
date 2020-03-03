import React from "react"

const contactEmail = 'contact@followmylead.com'

function Contact() {

   
    return (
      <div className="contact">
        <h1>Super Speedy Contact Page!</h1>
        <p className='form-container'>Email us at <a href="">{contactEmail}</a> and one of our doghandlers will be in touch!</p>
      </div>
    );
  }
  
  export default Contact