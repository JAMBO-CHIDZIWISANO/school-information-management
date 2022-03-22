
import axios from "axios";

//api auth url
const API_URL = "http://localhost:4000/api/auth/";




const registerTeacher = (id, username, email, password ) => {
  const roles= ["teacher"]

  return axios.post(API_URL + "signup", {
    id,
    username,
    email,
    password,
    roles,
  })
}
const registerAdmin = (id, username, email, password ) => {
  const roles= ["admin"]

  return axios.post(API_URL + "signup", {
    id,
    username,
    email,
    password,
    roles,
    
  })
}
const registerStudent = (id, username, email, password ) => {
  const roles= ["student"]

  return axios.post(API_URL + "signup", {
    id,
    username,
    email,
    password,
    roles,
  })
}
const registerParent = (id, username, email, password ) => {
  const roles= ["parent"]

  return axios.post(API_URL + "signup", {
    id,
    username,
    email,
    password,
    roles,
  })
}


  
//login function using username and password
const login = async (username, password) => {
  const response = await axios
        .post(API_URL + "signin", {
            username,
            password,
        });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

//logout function the remove/destroy user access token from the localstorage
const logout = () => {
  localStorage.removeItem("user");
};

//function for getting current user upon successfully logged in
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

  export default {
    registerTeacher,
    registerAdmin,
    registerParent,
    registerStudent,
    
    login,
    logout,
    getCurrentUser,
  };