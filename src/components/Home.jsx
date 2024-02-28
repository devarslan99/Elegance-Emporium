import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/full-length-shot-happy-asian-girl-going-vacation-tourist-with-suitcase-smiling-looking-upbeat_1258-149480.jpg?w=1380&t=st=1700058800~exp=1700059400~hmac=3838bd2f91b56eb75ecac9ab8beb2a755c0eaca4fbed75605be1cb8f9e062eba"
              className="card-img"
              alt="card-img"
              height="710px"
            />
            <div className="card-img-overlay ms-5 d-flex flex-column justify-content-center">
              <div className="container text-white">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  NEW SEASON ARRIVALS
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img
              src="https://img.freepik.com/free-photo/elegant-working-woman-glasses-holding-laptop-computer-smartphone-smiling-pleased-camera-st_1258-164105.jpg?w=2000&t=st=1700231887~exp=1700232487~hmac=970b3b39430a0e6063e7d04f027852b5e79111aa0329db234284fb5f08961d11"
              className="card-img"
              alt="card-img"
              height="710px"
            />
            <div className="card-img-overlay me-5 d-flex text-end flex-column justify-content-center">
              <div className="container text-white">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  GET YOUR CHOICE NOW
                </h5>
                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
            </div>
          </div>

        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
