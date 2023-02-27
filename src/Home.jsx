import React from "react";
import Common from "./Common";
import logo from "./Images/Work.jpg"
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <>
      <Common name ="Grow your business with" btn = "Get Started" visit = "/Service" imgsrc = {logo}/>
    </>
  );
};

export default Home;
