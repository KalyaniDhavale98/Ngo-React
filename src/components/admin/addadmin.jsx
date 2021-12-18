import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import admin from "../../images/adminh.jpg";
import Joi from "joi-browser";

class AddAdmin extends React.Component {
  state = {
    admin: {
      adminUsername: "",
      adminPassword: "",
    },

    errors: {},
    errMsg: "",
  };
  //define schema to validate input field values
  schema = {
    adminUsername: Joi.string().min(3).max(20).required(),
    adminPassword: Joi.string().min(3).required(),
  };
  // Step 3: Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.admin, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    // setting error messages to error properties

    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };
  handleChange = (event) => {
    //copying state employee object to local variable employee
    const admin = { ...this.state.admin };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local employee object values entered by user
    admin[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ admin: admin });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("http://localhost:8080/admin/add", this.state.admin)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added admin " + this.state.admin.adminUsername + " successfully!"
        );
        // this.props.history.push("/employee/get");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //object destructuring
    const { adminUsername, adminPassword } = this.state.admin;
    const { errors, errMsg } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${admin})`,
          backgroundSize: "cover",
          height: "650px",
        }}
      >
        <div className="w-50 mx-auto ">
          <br />
          <br />
          {errMsg && (
            <div className="alert alert-danger" role="alert">
              {errMsg}
            </div>
          )}
          <form
            onSubmit={this.handleSubmit}
            className=" shadow p-3 mb-5 bg-body rounded mt-5 "
          >
            <div className="mb-3">
              <label htmlFor="adminUsername" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="adminUsername"
                aria-describedby="emailHelp"
                value={adminUsername}
                name="adminUsername"
                onChange={this.handleChange}
              />
              {errors && <small>{errors.adminUsername}</small>}
            </div>

            <div className="mb-3">
              <label htmlFor="adminPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="adminPassword"
                value={adminPassword}
                name="adminPassword"
                onChange={this.handleChange}
              />
              {errors && <small>{errors.adminPassword}</small>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </div>
            <div>
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAdmin;
