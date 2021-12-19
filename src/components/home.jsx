import React, { Component } from "react";
import Footer from "../components/footer";
// import Employee from "../images/employee.jpg";
import Study from "../images/study.jpg";
import Help from "../images/help.jpg";
import child from "../images/child.jpg";
// import Needy from "../images/needy.jpg";
import Pic from "../images/img_1.jpg";
import Pic1 from "../images/img_2.jpg";
import Pic2 from "../images/images.jpg";
import helpinghand from "../images/helpinghand.jpg";
import hope from "../images/hope.jpg";
import prayers from "../images/Prayers.jpg";
import peace from "../images/peace.jpg";
import icond from "../images/icond.jpg";
import { Link } from "react-router-dom";
import AddCardIcon from "@mui/icons-material/AddCard";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid   bg-dark ">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade opacity-50 "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner pt-5 padding 20px">
              <div class="carousel-item active mx auto" data-bs-interval="1000">
                <img src={Pic} class="rounded w-90" height="500 " alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={Pic1}
                  class="rounded w-90"
                  height="500"
                  width="765"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src={Pic2}
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

          <div class=" row mt-5 " style={{ margin: "10px" }}>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={child} class="card-img-top " alt="..." />
              <div class="card-body">
                <div>
                  <h4>
                    <strong>Save Poor Children</strong>
                  </h4>
                </div>
                <p class="card-text">
                  <pre>
                    "You have two hands.
                    <br />
                    One to help yourself, <br />
                    the second to <br />
                    help orthrs"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/donationBox/add" className="btn btn-primary">
                  Donate Now
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Study} class="card-img-top" width="200px" alt="..." />
              <div class="card-body">
                <div>
                  <h4>
                    <strong>They Want Study </strong>
                  </h4>
                </div>
                <p class="card-text">
                  <pre>
                    "we can't help <br />
                    everyone but <br />
                    everyone can help <br />
                    someone"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/donatenow" className="btn btn-primary">
                  Donate Now
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Pic} class="card-img-top" alt="..." />
              <div class="card-body">
                <div>
                  <h4>
                    <strong>Healthy Food For All</strong>
                  </h4>
                </div>
                <p class="card-text">
                  <pre>
                    "Don't turn away,
                    <br />
                    Give today!"
                    <br />
                    "Don't delay give today!"
                  </pre>
                </p>
                {/* <a href="#" class="btn btn-primary"> */}
                <Link to="/donatenow" className="btn btn-primary">
                  Donate Now
                </Link>
              </div>
            </div>
            <div class="card " style={{ width: "17rem", margin: "10px" }}>
              <img src={Help} class="card-img-top" alt="..." />
              <div>
                <br />
                <h4>
                  <strong>Cloths for Needy</strong>
                </h4>
              </div>
              <div class="card-body">
                <p class="card-text">
                  <pre>
                    “We make a living by what
                    <br />
                    we get, But we make a life
                    <br />
                    by what we give.”
                  </pre>
                </p>
                <a href="/donatenow" class="btn btn-primary">
                  Donate Now
                </a>
              </div>
            </div>
          </div>

          <div className="container-fluid bg-white ">
            <img
              src={helpinghand}
              class="rounded w-90"
              height="100px"
              alt="..."
            />
            <br />
            <br />
            <h1>
              <em>
                <pre>
                  We Believe That We Can Save
                  <br />
                  More Lifes With You
                </pre>
              </em>
            </h1>
            <strong>
              <center className="text-success"> HELP US NOW</center>
            </strong>
            <div className="row">
              <div className="col-md-3">
                <img src={hope} class="rounded w-90" height="100px" alt="..." />
                <br />
                <h6>HOPE</h6>
                <br />
                <pre>
                  Sometimes that's all you have
                  <br /> when you have nothing else.
                  <br />
                  If you have it, you have everything.
                </pre>
              </div>
              <div className="col-md-3">
                <img
                  src={prayers}
                  class="rounded w-90"
                  height="100px"
                  alt="..."
                />
                <br />
                <h6>Prayers</h6>
                <br />
                <pre>
                  God understands our prayers even
                  <br /> when we can't find the words
                  <br /> to say them.
                </pre>
              </div>
              <div className="col-md-3">
                <img
                  src={peace}
                  class="rounded w-90"
                  height="100px"
                  alt="..."
                />
                <br />
                <h6>peace</h6>
                <br />
                <pre>
                  Peace cannot be kept by force,
                  <br /> it can only be achieved by
                  <br /> understanding.
                </pre>
              </div>
              <div className="col-md-3">
                <img
                  src={icond}
                  class="rounded w-90"
                  height="100px"
                  alt="..."
                />
                <br />
                <h6>Donation</h6>
                <br />
                <pre>
                  Giving is not about making <br />
                  a donation, it is about
                  <br />
                  making a difference.
                </pre>
              </div>
              <div className="float-center mb-3">
                <Link to="/request/add" className=" btn btn-success btn-lg ">
                  <AddCardIcon />
                  Request for help
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
