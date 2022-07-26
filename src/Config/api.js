import axios from "axios";
const instance  = axios.create({
  baseURL: "https://tms-back.herokuapp.com/api/",
  //baseURL: "http://localhost:3333/api"
});
export default instance;
