import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EmployeeTable from "./employeetable";
import img1 from "../../images/back.jpg";
import { connect } from "react-redux";

class Employee extends React.Component {
  state = {
    employees: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/employee`)
      .then((res) => {
        console.log(res);
        this.setState({ employees: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleDelete = (employeeId) => {
    axios
      .delete(`http://localhost:8080/employee/remove/${employeeId}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const employees = this.state.employees.filter(
          (s) => s.employeeId !== employeeId
        );
        this.setState({ employees: employees });
        alert(res.data.employeeName + " deleted succussfully!");
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
        <div className="w-75 mx-auto">
          <EmployeeTable
            employees={this.state.employees}
            handleDelete={this.handleDelete}
          />
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
export default connect(mapStateToProps)(Employee);

//export default Employee;
