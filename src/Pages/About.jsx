import React from 'react'
import Common from "../Components/Common.jsx";
import AboutLogo from "../Assets/Images/about.jpeg";

const About = () => {
     return (
          <>
               <Common name="Welcome to about page" btn="Contact Us" visit="/Contact" img_src={AboutLogo} />
          </>
     )
}

export default About;
