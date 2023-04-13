import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="mt-5 col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1>
                    {props.name}
                    <strong className="navbar-brand fs-1"> Apni Duniya</strong>
                  </h1>
                  <h2 className="fs-4">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-outline-primary "
                    >
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.img_src}
                    className="img-fluid animated"
                    alt="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
