import axios from 'axios'
export const createregisterrequest = async (acc) => {
    delete acc["confirmpassword"];
    console.log(acc);
   await axios.post("http://localhost:4000/user", acc)
}   

export const getuserexist = async (acc) => {
    delete acc["confirmpassword"];
    console.log(acc);   
    
   await axios.get("http://localhost:4000/user", acc)
}   