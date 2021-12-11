import React, { Component } from "react";
import pic from "../images/img_1.jpg";
import pic1 from "../images/img_2.jpg";
import pic2 from "../images/images.jpg";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid  bg-dark ">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade opacity-50"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner pt-5 padding 20px">
              <div class="carousel-item active mx auto" data-bs-interval="1000">
                <img src={pic} class="rounded w-90" height="500 " alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={pic1}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={pic2}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="row mt-5 s-12 ">
            <div class="card " style={{ width: "17rem", padding: "10px" }}>
              <img src={pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card " style={{ width: "17rem" }}>
              <img src={pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card " style={{ width: "17rem" }}>
              <img src={pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card " style={{ width: "17rem" }}>
              <img src={pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div class="card text-start mt-5">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#">
                    Active
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Help</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
