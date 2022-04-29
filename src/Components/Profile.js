import SchoolDetails from "./SchoolDetails";
import React, {Component} from "react";
import NumberOfStudents from "./AdminPanel/NumberOfStudents";
import NumberOfTeachers from "./AdminPanel/NumberOfTeachers";
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
      <div className="container justify-content-center align-items-center">
       
        
      <div className="row mt-2">
      < SchoolDetails/>

      </div>
        
       
        
        <hr/>

      <div>
            
      <div className='row '>
        <div className='col-12 col-md-4 col-lg-3 card card-margin mx-2 '>
        <div className="card-header no-border">
                <h5 class="card-title">Number Of Students</h5>
            </div>
          <div className='card-body'>
             <NumberOfStudents/>
          </div>
          
        </div>

        <div className='col-12 col-md-4 col-lg-3 card card-margin mx-2'>
        <div class="card-header no-border">
                <h5 className="card-title">Number Of Teachers</h5>
            </div>
          <div className='card-body'>
            <NumberOfTeachers/>
          </div>
         
        </div>
        <div className='col-12 col-md-4 col-lg-3  card card-margin mx-2'>
        <div className="card-header no-border">
                <h5 className="card-title">User Information</h5>
            </div>
          <div className='card-body'>
            
          <div className="">
                            <p>  Username : {currentUser.username} </p>
                            <p>  Email:    {currentUser.email} </p>
                            <p>  Role :  {currentUser.roles &&
                            currentUser.roles.map((role, index) => <> {role}</>)} </p>
            </div>
          </div>
            
        </div>
       
      </div>
       
        <div className="details">

          

{/*          
          <div className="row">
          <div className="" >  
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
          
          </div>
       */}
        
        </div>
        </div>
       
      </div>
    );
  }
}