import AuthService from "../services/auth.service";
import userService from "../services/user.service";
import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { PersonAddAlt1Sharp } from "@mui/icons-material";

const AddSDParents = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form2- teacher details registration
  const [parentId, setParentId] = useState(username)
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId]= useState(username)

  // setting out error messages
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // handling events
  
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  const onChangeParentId=(e)=>{
    const parentId = e.target.value;
    setParentId(username)
  }
  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeSurname = (e) => {
    const surname = e.target.value;
    setSurname(surname);
  };

  const onChangePhoneNo = (e) => {
    const phoneNo = e.target.value;
    setPhoneNo(phoneNo);
  };
  const onChangeGender = (e) => {
    const gender = e.target.value;
    setGender(gender);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeUserId = (e) => {
    const userId = e.target.value;
    setUserId(username);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      AuthService.registerParent( username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );

  };

  const addParent = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    //form.current.validateAll();
      userService.parentPersonalDetails(parentId, firstname, surname, phoneNo, gender,address, userId).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );

  };
  return (
    <div className="container">
      <hr/>
      <div style={{textAlign: "right"}}>
      <Link to={"/admin/parents-records"}> 
        <Button variant="primary">
          back
        </Button>
        </Link>
        <Link to={"/admin/add-sdparent"}> 
            <Button variant="primary">
                <PersonAddAlt1Sharp/>
            </Button>
        </Link>
      </div>
      <hr/>
      
      <div className="row">
        <div  className="col-12 col-md-6 col-lg-4">
        
        <h3 className="text-center" >Parent Sign Up Form</h3><hr/>
        <form onSubmit={handleRegister}  autoComplete="off" className="">
          {!successful && (
            <div>


              <div className="form-group mt-3" >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control  mt-3"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  required  placeholder="Enter username"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control  mt-3"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control  mt-3"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}
          {message && (
            <div className="form-group mt-3">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </form>
      </div>
      

      <div className="col-12 col-md-8 col-lg-8" >
        <h2>Parent Personal Details</h2><hr/>
      <form >
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div className="form-group " >
              <strong htmlFor="parentId">Username</strong>
              <input type="text" className="form-control" name="parentId"
                value={parentId} onChange={onChangeParentId}
                placeholder="Same as username"
              />
            </div>
          </div>

        <div className="col-12 col-md-6 col-lg-6">
          <div className="form-group ">
            <strong htmlFor="userId">userId</strong>
            <input type="text" className="form-control" name="userId"
                value={userId} onChange={onChangeUserId}
                placeholder="Same as username" 
            />
          </div>
        </div>
          
        </div>

      <div className="row">

      <div className="col-12 col-md-6 col-lg-6">
        <div className="form-group " >
        <strong htmlFor="firstname">Firstname</strong>
        <input type="text" className="form-control" name="firstname"
            value={firstname} onChange={onChangeFirstname} required
        />
      </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6">
        <div className="form-group ">
        <strong htmlFor="phoneNo">Surname</strong>
        <input type="text" className="form-control" name="surname"
            value={surname} onChange={onChangeSurname} required
        />
      </div>
        </div>
        
        

      </div>

        
      <div className="row">

        <div className="col-12 col-md-6 col-lg-6">
        <div className="form-group ">
        <strong htmlFor="gender">Gender</strong>
        <select type="text" 
          className="form-control" 
          name="gender"
          value={gender} 
          onChange={onChangeGender} 
          required >
          <option >Tap to Choose</option>
          <option >Male</option>
          <option>Female</option>
          </select> 
      </div>

        </div>
        <div className="col-12 col-md-6 col-lg-6">
        <div className="form-group ">
        <strong htmlFor="phone">Phone Number</strong>
        <input type="tel" className="form-control" name="phone"
            value={phoneNo} onChange={onChangePhoneNo} required
        />
      </div>
        </div>

      </div>
      

           
      <div className="form-group ">
        <strong htmlFor="address">Address</strong>
        <input type="text" className="form-control form-control-lg" name="address"
            value={address} onChange={onChangeAddress} required
        />
      </div>

      

        <div className="form-group mt-3">
            <button onClick={addParent} className="btn btn-primary btn-block">Submit</button>
        </div>

      
    </form>
    </div>
    </div>
    </div>


  )
}

export default AddSDParents
