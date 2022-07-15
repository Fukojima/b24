import instance from "../Config/api";
const path = "/details";


function useDetails() {
  async function getDetails(month){
    try{
      const response = await instance.get(path + `/${month}`);
      return response.data;
    }catch(err){
      return err;
    }
  }

  
  return {
    getDetails
  };
}
export default useDetails;
