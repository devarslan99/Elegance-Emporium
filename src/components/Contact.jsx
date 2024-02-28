import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container contact my-5 py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Have some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <img
              src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?w=740&t=st=1700063470~exp=1700064070~hmac=17e621e6698ec52412d6d77a16615e441477e04e986f7ad9f83e612aa6e5022d"
              alt="Contact img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 my-5">
            <form action="">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-dark">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
