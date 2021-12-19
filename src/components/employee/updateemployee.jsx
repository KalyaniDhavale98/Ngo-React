import axios from "axios";
import React from "react";
import img1 from "../../images/back.jpg";
class UpdateEmployee extends React.Component {
  state = {
    employee: {
      employeeName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
      city: "",
      state: "",
      pin: "",
      landmark: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/employee/id/${this.props.match.params.employeeId}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ employee: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    //copying state employee object to local variable employee
    const employee = { ...this.state.employee };

    console.log(event.target.name); //name of field -fullname
    console.log(event.target.value); //value entered in the field
    //update local employee object values entered by user
    employee[event.target.name] = event.target.value;

    //update state object using setstate method
    this.setState({ employee: employee });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const employee = {
      employeeName: this.state.employee.employeeName,
      email: this.state.employee.email,
      phone: this.state.employee.phone,
      username: this.state.employee.username,
      password: this.state.employee.password,
      address: {
        city: this.state.employee.city,
        state: this.state.employee.state,
        pin: this.state.employee.pin,
        landmark: this.state.employee.landmark,
      },
    };
    //when user clicks on submit we have to post request to rest api
    axios
      .put(
        `http://localhost:8080/employee/update/${this.props.match.params.employeeId}`,
        employee
      )
      .then((res) => {
        console.log(res.data);
        alert(
          "Updated employee " +
            this.state.employee.employeeName +
            " successfully!"
        );
        this.props.history.push("/employee/get");
      })
      .catch((err) => console.log(err));
  };
  render() {
    //object destructuring
    const { employeeName, email, phone, username, city, state, pin, landmark } =
      this.state.employee;

    return (
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          width: "1280px",
          height: "1000px",
        }}
      >
        <h1>Update Employee Details</h1>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-5 "
        >
          <div className="mb-3">
            <label htmlFor="employeeName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="employeeName"
              aria-describedby="emailHelp"
              value={employeeName}
              name="employeeName"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" class="form-label">
              Email id
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" class="form-label">
              Phone number
            </label>
            <input
              type="tel"
              class="form-control"
              id="phone"
              aria-describedby="emailHelp"
              value={phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              value={username}
              name="username"
              onChange={this.handleChange}
            />
          </div>
          {/* address */}
          <div className="mb-3">
            <label htmlFor="city" class="form-label">
              Enter the city
            </label>
            <input
              type="text"
              class="form-control"
              id="city"
              aria-describedby="emailHelp"
              value={city}
              name="city"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="state" class="form-label">
              Enter the state
            </label>
            <input
              type="text"
              class="form-control"
              id="state"
              aria-describedby="emailHelp"
              value={state}
              name="state"
              onChange={this.handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="pin" class="form-label">
              Enter pincode
            </label>
            <input
              type="text"
              class="form-control"
              id="pin"
              aria-describedby="emailHelp"
              value={pin}
              name="pin"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="landmark" class="form-label">
              Enter landmark
            </label>
            <input
              type="text"
              class="form-control"
              id="landmark"
              aria-describedby="emailHelp"
              value={landmark}
              name="landmark"
              onChange={this.handleChange}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateEmployee;
