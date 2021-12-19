import React from "react";
import axios from "axios";
import donate from "../images/donate.jpg";
import hand from "../images/handh.png";
import Joi from "joi-browser";
import login from "../images/login.jpg";
import { Link } from "react-router-dom";

class DonateNow extends React.Component {
  state = {
    donation: {
      donationAmount: "",
      donationType: "",
    },
    errors: {},
    errMsg: "",
  };

  // define schema to validate input field values
  schema = {
    donationAmount: Joi.number().integer().min(100).required(),
    donationType: Joi.string().required(),
  };

  handleChange = (event) => {
    // copy state donation object to local variable donation
    const donation = { ...this.state.donation };

    // update local donation object with values entered by user
    donation[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ donation: donation });
  };

  //Validate user input with schema
  validate = () => {
    const errors = {};
    const result = Joi.validate(this.state.donation, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
      .post("http://localhost:8080/donation/add", this.state.donation)
      .then((res) => {
        console.log(res.data);
        alert("Donation added successfully!");
        this.props.history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.message);
        this.setState({ errMsg: err.response.data.message });
      });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${login})`,
          backgroundSize: "cover",
          width: "1250px",
          height: "1000px",
        }}
      >
        <br />
        <div>
          <Link class="navbar-brand justify-center " to="/insertBank">
            <img
              src={donate}
              class="rounded w-90 float-end"
              height="100"
              alt="..."
            />
          </Link>
        </div>

        <br />
        <br />
        <div className="w-50 mx-auto flost-end">
          {this.errMsg && (
            <div className="alert alert-danger" role="alert">
              {this.errMsg}
            </div>
          )}
          <form
            onSubmit={this.handleSubmit}
            className="shadow p-3 mb-5 bg-body rounded mt-3"
          >
            <div className="mb-3">
              <h3>Add Donation</h3>
              <img src={hand} class="rounded w-90" height="100" alt="..." />
              <br />
              <br />
              <label htmlFor="donationAmount" className="form-label">
                Donation Id
              </label>
              <input
                type="number"
                className="form-control"
                id="donationAmount"
                aria-describedby="emailHelp"
                value={this.donationAmount}
                name="donationAmount"
                onChange={this.handleChange}
              />
              {this.errors && <small>{this.errors.donationAmount}</small>}
            </div>
            <br />
            <select
              className="form-select text-center"
              aria-label="Default select example"
              value={this.donationType}
              name="donationType"
              onChange={this.handleChange}
            >
              <option selected>Select donation type</option>
              <option value="Clothes">Clothes</option>
              <option value="Books">Books</option>
              <option value="Edible">Edible</option>
              <option value="Other">Other</option>
            </select>
            {this.errors && <small>{this.errors.donationType}</small>}
            <br />
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default DonateNow;
