import React, { Component } from "react";
import AuthService from "./services/auth.service";
import CurrentUser from "../CurrentUser";
import axios from 'axios'
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      
    };
  }

  

  render() {
    const { currentUser } = this.state;

    return (
      <div className="container justify-content-center aligh-items-center">
        <hr/>
        <div className=" text-center  mt-6">
      
          <h2>School Management Information System</h2>
       
        </div>
       
        <div className=" justify-content-center aligh-items-center text-center">

          <hr/>
          
        <p>
          <strong>username:</strong>{" "}
          {currentUser.username}
        </p>
        <p>
          
          <strong>Email Address:</strong>{" "}
          {currentUser.email}
        </p>
        
       
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        </div>
        <div>
        </div>
      </div>
    );
  }
}