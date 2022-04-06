import React, { Component } from "react";
import AuthService from "./services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="">
        </header>
        <div className="user-profile">
          <div className="profile-pic">
            <h1>Your Picture Here</h1>
          </div>
        <p>
          <strong>username:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>First Name:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Surname:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Current Class:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Physical Address:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          <strong>Contact Numbers:</strong>{" "}
          {currentUser.email}
        </p>
        <p>
          <strong>E-mail Address:</strong>{" "}
          {currentUser.username}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        </div>
      </div>
    );
  }
}