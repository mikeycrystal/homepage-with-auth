import React, { Component } from "react";
import { auth } from "./config/firebase";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = (e) => {
    auth.signOut();
  };
  render() {
    return (
      <div>
        <h1 className="center">Welcome to the Application</h1>
        <button className="center" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}
