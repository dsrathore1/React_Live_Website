import React from "react";
import Card from "../Components/Card.jsx"
import S_data from "../Components/Sdata.jsx";

const Service = () => {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {S_data.map((val, index) => {
                return <Card
                  key={index}
                  img_src={val.img_src}
                  title={val.title} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
