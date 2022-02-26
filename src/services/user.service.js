import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:4000/api/school/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getTeacherBoard = () => {
  return axios.get(API_URL + "teacher", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getTeacherBoard,
  getAdminBoard,
};