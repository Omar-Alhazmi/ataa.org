import apiURL from'./ApiConfig';
import axios from 'axios';


//---------------All POST Request-------------------//



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
  