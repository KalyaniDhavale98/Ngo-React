import React from "react";
import { Link, NavLink } from "react-router-dom";
import img1 from "../../images/back.jpg";
import axios from "axios";
class EmployeeAddress extends React.Component {
  state = {
    address: {},
  };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(
        `http://localhost:8080/employee/get/address/${this.props.match.params.addressId}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ address: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { address } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          width: "1300px",
          height: "600px",
        }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>AddresssId</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Landmark</th>
            </tr>
          </thead>
          <tbody>
            <tr key={address.addressId}>
              <td>{address.addressId}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>
              <td>{address.pin}</td>
              <td>{address.landmark}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeAddress;
