import React from "react";
import Common from "../Components/Common.jsx";
import Logo from "../Assets/Images/Work.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        btn="Get Started"
        visit="/Service"
        img_src={Logo}
      />
    </>
  );
};

export default Home;
