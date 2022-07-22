import axios from "axios";
const instance  = axios.create({
  //baseURL: "https://back-aps-tascom.herokuapp.com/api/",
  baseURL: "https://tms-back.herokuapp.com/api"
});
export default instance;
