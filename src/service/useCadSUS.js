import axios from "axios";
const path = "https://tascom-cadsus.herokuapp.com/api/tascom-esus";


function useCadSUS() {
  async function getCADSUS(docId){
    try{
      const response = await axios.get(path + `/${docId}`);

      return response.data;
    }catch(err){

      return err.response.data;
    }
  }

  
  return {
    getCADSUS
  };
}
export default useCadSUS;
