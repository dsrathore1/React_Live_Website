import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const input = (e) => {
    const { name, value } = e.target;
    setName((old) => {
      return { ...old, [name]: value };
    });
  };
  const inputSubmit = (e) => {
    e.preventDefault();
    alert(`${name.fullName} 
          ${name.phone} 
          ${name.email}   
          ${name.message}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={inputSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={name.fullName}
                  onChange={input}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={name.phone}
                  onChange={input}
                  placeholder="mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={name.email}
                  onChange={input}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={name.message}
                  onChange={input}
                ></textarea>
              </div>
              <div class="col-12 mb-4">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
