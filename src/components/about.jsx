import React, { Component } from "react";
import aboutus from "../images/aboutus.jpg";
import child from "../images/child1.jpg";
import Button from "@mui/material/Button";
import lady from "../images/lady.jpg";
import work from "../images/work.jpg";
import Footer from "../components/footer";

class About extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={aboutus}
            class="rounded w-90"
            height="650"
            width="1250"
            alt="..."
          />
        </div>
        <div class=" row mt-6 " style={{ margin: "10px" }}>
          <div
            class="card "
            style={{ width: "40rem", height: "20rem", margin: "30px" }}
          >
            <div class="card-body">
              <p class="card-text">
                <h1>Our Mission & Vision</h1>
                <br />
                Our <strong>ngo</strong> envisions to grow as an{" "}
                <strong>idea</strong> across regions, economies and countries
                using urban discard as a tool to alleviate poverty and enhance
                the dignity of the underprivileged people of the world. Address
                basic but neglected issues of the poor by involving them in
                evolving their own solutions with dignity and urban material as
                reward.
              </p>
            </div>
          </div>
          <div class="card " style={{ width: "25rem", margin: "30px" }}>
            <img src={child} class="rounded w-90" height="280" alt="..." />
            <div class="card-body"></div>
          </div>
          <div class="card " style={{ width: "25rem", margin: "30px" }}>
            <img src={lady} class="rounded w-90" height="280" alt="..." />
            <div class="card-body"></div>
          </div>
          <div
            class="card "
            style={{ width: "40rem", height: "20rem", margin: "30px" }}
          >
            <div class="card-body">
              <p class="card-text">
                <h1>Values & Guiding Principles</h1>
                <br />
                <p>
                  We aim to recognize and value the potential of local resource
                  and traditional wisdom of people.
                </p>
                <p>
                  Our focus is concentrated on the receiver’s dignity instead of
                  the donor’s pride. We promote circular economy by ensuring
                  maximum use of each material. We value collaborative efforts
                  with partner organizations to increase effectiveness and
                  scale.
                </p>
                <Button variant="outlined">Know more</Button>
              </p>
            </div>
          </div>
          ,
          <div
            class="card "
            style={{ width: "40rem", height: "20rem", margin: "30px" }}
          >
            <div class="card-body">
              <p class="card-text">
                <h2>Processing Center</h2>
                <p>
                  Processing Centers are first point where all material
                  collected from the cities goes through a rigorous process of
                  sorting, segregating, repairing and packing before dispatching
                  it to the remotest villages of India.
                </p>
                <p>
                  The dignity of the receiver and giving with dignity is at the
                  center of all that we do because when people in remote
                  villages of India work for many days on building a bamboo
                  bridge or digging a well or building a community hall, they
                  deserve a reward… NOT Charity.
                </p>
                <Button variant="outlined">Know more</Button>
              </p>
            </div>
          </div>
          <div class="card " style={{ width: "25rem", margin: "30px" }}>
            <img src={work} class="rounded w-90" height="280" alt="..." />
            <div class="card-body"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
