import instance from "../Config/api";
const path = "/history";


function useHistory() {
  async function getHistory(month){
    try{
      const response = await instance.get(path )
      return response.data;
    }catch(err){
      return err;
    }
  }

  
  return {
    getHistory
  };
}
export default useHistory;
