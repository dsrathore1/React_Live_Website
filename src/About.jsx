import React from 'react'
import Common from "./Common";
import about from "./Images/about.jpeg";


const About =() =>{
     return (
          <>
          <Common name = "Welcome to about page" btn = "Contact Us" visit = "/Contact" imgsrc = {about}/>
          </>
     )
}

export default About;
