import axios from "axios";
const instance  = axios.create({
  //baseURL: "https://back-aps-tascom.herokuapp.com/api/",
  baseURL: "http://localhost:3333/api"
});
export default instance;
