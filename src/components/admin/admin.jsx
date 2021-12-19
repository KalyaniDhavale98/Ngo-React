import React from "react";
import employee from "../../images/employee.jpg";
import Help from "../../images/help.jpg";
import Rps1 from "../../images/ngologo.jpg";
import { connect } from "react-redux";
class Admin extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src={Help}
            class="rounded w-90"
            height="500"
            width="1250"
            alt="..."
          />
        </div>
        <div className="row">
          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header  bg-success bg-opacity-25">
                  Employee Details
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know our worriors how are giving their life towards
                    humanity.
                  </p>
                </em>
                <a href="/employee" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header bg-success bg-opacity-25">
                  Donar details
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                  opacity: "25",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know people who belive in us, we are there for them.
                  </p>
                </em>
                <a href="/donor" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header bg-success bg-opacity-25">
                  NeedyPeople
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                  opacity: "25",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know people who belive in us, we are there for them.
                  </p>
                </em>
                <a href="/needypeople" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header bg-success bg-opacity-25">
                  Donation Box
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                  opacity: "25",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know people who belive in us, we are there for them.
                  </p>
                </em>
                <a href="/donationBox" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header bg-success bg-opacity-25">
                  Request for help
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know our total Collection we get from donation.
                  </p>
                </em>
                <a href="/requestforhelp" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card mt-4">
              <b>
                <div className="card-header bg-success bg-opacity-25">
                  Donate To Ngo
                </div>
              </b>
              <div
                className="card-body"
                style={{
                  backgroundImage: `url(${Rps1})`,
                  backgroundSize: "cover",
                  height: "auto",
                  opacity: "25",
                }}
              >
                <em>
                  <p className="card-text text-dark">
                    Know people who belive in us, we are there for them.
                  </p>
                </em>
                <a href="/donatetongo" className="btn btn-info">
                  Click Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Admin);
