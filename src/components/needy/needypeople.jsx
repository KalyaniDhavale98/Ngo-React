import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NeedyPeople extends React.Component {
  state = {
    needyPeople: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(`http://localhost:8080/needy/get`)
      .then((res) => {
        console.log(res);
        this.setState({ needyPeople: res.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (id) => {
    //axios.delete("http://localhost:8082/students/" + rollNo);
    axios
      .delete(`http://localhost:8080/needy/delete/${id}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const needyPeople = this.state.needyPeople.filter(
          (n) => n.needyPersonId !== id
        );
        this.setState({ needyPeople: needyPeople });
        alert("Deleted successfully!");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/needypeople/add" className="btn btn-info float-end">
          Add
        </Link>
        <table className="table  table-success table-striped table-hover">
          <thead>
            <tr>
              <th>NeedyPersonId</th>
              <th>NeedyPersonName</th>
              <th>Phone</th>
              <th>FamilyIncome</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.needyPeople.map((n) => (
              <tr key={n.needyPersonId}>
                <td>{n.needyPersonId}</td>
                <td>{n.needyPersonName}</td>
                <td>{n.phone}</td>
                <td>{n.familyIncome}</td>
                <td>
                  <Link
                    to={`/needypeople/address/${n.address.addressId}`}
                    className="btn btn-primary"
                  >
                    More Info
                  </Link>
                  <Link
                    to={`/needypeople/update/${n.needyPersonId}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(n.needyPersonId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default NeedyPeople;
