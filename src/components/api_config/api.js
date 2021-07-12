import apiURL from'./ApiConfig';
import axios from 'axios';
import {checkStorage} from '../helperMethods';
//================== Helper Method ============================||
const config ={
    headers:{
        "Content-type": "application/json"
    }
  }
  if(checkStorage()){
    config.headers['Authorization'] = `Bearer ${checkStorage()}`
  }
//================== Helper Method ============================||

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
export const TeamRegistration = (req,id) => {
  return axios({
    method: 'POST',
    url: apiURL + `api/request/register/new/Team/${id}`,
    data:{
      TeamName: req.TeamName,
      NumberOfII: req.NumberOfII,
      Vision: req.Vision,
      Message: req.Message,
      GeneralGoal: req.GeneralGoal,
      SpecificGoal: req.SpecificGoal,
     },
    config
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
    return axios.get(`${apiURL}api/get/Team/ByUser/${id}`,config);
  }  

