import apiURL from './ApiConfig';
import axios from 'axios';
import { checkStorage } from '../helperMethods';
//================== Helper Method ============================||
const config = {
  headers: {}
}
if (checkStorage()) {
  config.headers['Authorization'] = `Bearer ${checkStorage()}`
}

//================== Helper Method ============================||
//---------------All POST Request-------------------//

export const UserRegistration = req => {
  return axios({
    method: 'POST',
    url: apiURL + 'api/User/register',
    data: {
      FullName: req.FullName,
      UserName: req.UserName,
      password: req.password,
      Email: req.Email,
      Phone: req.Phone,
      Role: req.Role,
      NationalId: req.NationalId,
      Job: req.Job,
      Education: req.Education,
      Gender: req.Gender
    }
  })
}
//========================= Team Registration =============================\\
export const TeamRegistration = (req, id, Logo) => {
  const formData = new FormData();
  Object.entries(req).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append("Logo", Logo);
  return axios.post(`${apiURL}api/request/register/new/Team/${id}`, formData, config)
    .then(res => {
      console.log(res);
      localStorage.setItem("leadAt", res.data.token)
      window.location.reload(false)
    }
    )
    .catch(err => console.log(err));
};
//========================= Add New Post =============================\\
export const NewPost = (req, id, image) => {
  const formData = new FormData();
  Object.entries(req).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append("img", image);
  return axios.post(`${apiURL}api/post/${id}`, formData, config)
    .then(res => {
      console.log(res);
      window.location.reload(false)
    }
    )
    .catch(err => console.log(err));
};
//========================= Add New Post Police =============================\\
export const NewPolice = (Title, id, file) => {
  console.log(Title);
  const formData = new FormData();
  formData.append("Title", Title);
  formData.append("file", file);
  return axios.post(`${apiURL}api/upload/new/Police/${id}`, formData, config)
    .then(res => {
      // window.location.reload(false)
    }
    )
    .catch(err => console.log(err));
};

//========================= Update Team Data =============================\\
export const UpdateTeam = (req, id, Logo) => {
  const formData = new FormData();
  Object.entries(req).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append("Logo", Logo);
  return axios.patch(`${apiURL}api/Update/TeamBy/${id}`, formData, config)
    .then(res =>
      window.location.reload(false)
    )
    .catch(err => console.log(err));
};
//=====================  User Register To Team =================
export const UserRegToTeam = (userId, teamId) => {
  return axios({
    method: 'patch',
    url: `${apiURL}api/PassTeam/${teamId}`,
    data: {
      Members: userId,
    },
    config
  })
}
//---------------All GET Request-------------------//
export const getAllNews = () => {
  return axios.get(`${apiURL}api/get/All/News`);
}
export const getAllTeams = () => {
  return axios.get(`${apiURL}api/get/allTeams`);
}
export const getTeamLeader = (id) => {
  return axios.get(`${apiURL}api/get/Team/ByUser/${id}`, config);
}
export const getAllPolices = () => {
  return axios.get(`${apiURL}api/get/All/Polices`);
}


