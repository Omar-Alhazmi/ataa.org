import apiURL from'./ApiConfig';
import axios from 'axios';


//---------------All POST Request-------------------//

export const UserRegistration = req => {
  return axios({
    method: 'POST',
    url: apiURL + 'api/User/register',
    data:{
      FullName: req.FullName,
      UserName: req.UserName,
      password: req.password,
      Email:req.Email,
      Phone: req.Phone,
      Role: req.Role,
      NationalId: req.NationalId,
      Job:req.Job,
      Education:req.Education,
      Gender:req.Gender
   }
  })
}

//---------------All GET Request-------------------//
export const getAllNews = () =>{
    return axios.get(`${apiURL}api/get/All/News`);
  }  
export const getAllTeams = () =>{
    return axios.get(`${apiURL}api/get/allTeams`);
  }
  export const getTeamLeader = (id) =>{
    return axios.get(`${apiURL}api/get/all/user/${id}`);
  }  
  