import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DonorTable from "./donortable";
import img1 from "../../images/back.jpg";
import { connect } from "react-redux";
class Donor extends React.Component {
  state = {
    donors: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/donor`)
      .then((res) => {
        console.log(res);
        this.setState({ donors: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete = (donorId) => {
    axios
      .delete(`http://localhost:8080/donor/delete/${donorId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const donors = this.state.donors.filter((s) => s.donorId !== donorId);
        this.setState({ donors: donors });
        alert(res.data.donorName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          width: "1280px",
          height: "1000px",
        }}
      >
        {" "}
        <h1>Donor Details</h1>
        <div className="w-75 mx-auto">
          <DonorTable
            donors={this.state.donors}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};
export default connect(mapStateToProps)(Donor);
