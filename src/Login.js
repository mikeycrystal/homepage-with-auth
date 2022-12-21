import React, { Component } from "react";
import { auth } from "./config/firebase";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="form-group">
        <form className="login-form">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          ></input>
          <button onClick={this.login} className="button">
            Login
          </button>
          <button onClick={this.signup} className="button">
            Signup
          </button>
        </form>
      </div>
    );
  }
}
