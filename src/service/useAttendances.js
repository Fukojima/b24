import instance from "../Config/api";
const path = "/attendances";


function useAttendances() {
  async function getAttendances(){
    try{
      const response = await instance.get(path )
      return response.data;
    }catch(err){
      return err;
    }
  }

  
  return {
    getAttendances
  };
}
export default useAttendances;
