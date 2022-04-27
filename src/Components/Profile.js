import SchoolDetails from "./SchoolDetails";
import React, {Component} from "react";
import axios from "axios";

import AuthService from "./services/auth.service";


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
       
        <div className="details">

          <hr/>
          <div className="row">
          <div className="col-12 col-md-6 col-lg-6" >  
          <div className="uza">
          <strong className="black">Username :</strong>{" "}
          {currentUser.username}
        </div>
        <div className="uza">
          
          <strong className="black">Email Address :</strong>{" "}
          {currentUser.email}
        </div>
        
        <div className="uza">
        <strong className="black">Authority :</strong>{" "}
       
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <> {role}</>)}
        </div>
        </div>
          <div className="col-12 col-md-6 col-lg-6" >< SchoolDetails/>
          </div>
          </div>
      
        
        </div>
       
      </div>
    );
  }
}