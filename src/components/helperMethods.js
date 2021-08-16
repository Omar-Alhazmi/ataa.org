import jwt_decode from 'jwt-decode';

export const checkStorage = () => {
  return localStorage.getItem('currentUser');
};
export const getInfo = () => {
  return jwt_decode(localStorage.getItem('currentUser'))
};
export const getId = () => {
  if (checkStorage()) {
    return getInfo().data._id
  }
}
export const newTeam = () => {

  if (localStorage.getItem('leadAt')) {
    return true
  }
  else {
    return false
  }
}
export const leadTeam = () => {
  if (checkStorage()) {
    if (getInfo().data.LeaderAt !== undefined) {
      return true
    } else {
      return false
    }
  }
}
export const authToPost = () => {
  if (checkStorage()) {
    if (getInfo().data.LeaderAt !== undefined || getInfo().data.Role === "Superintendent") {
      return true
    } else {
      return false
    }

  }
}
export const haveTeam = () => {
  if (checkStorage()) {
    if (getInfo().data.TeamReg !== undefined) {
      return true
    } else {
      return false
    }
  }
}
export const validFileType = (file) => {
  const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon",
    "image/icon",
    "image/ico"
  ];
  return fileTypes.includes(file.type);
}
export const validFileTypePDF = (file) => {
  const fileTypes = [
    "application/pdf",
  ];
  return fileTypes.includes(file.type);
}
// start the time out
const EXPIRE_TIME = 1000 * 60 * 60 * 5;
setTimeout(function () {
  localStorage.clear();
  window.location.reload(false);
}, EXPIRE_TIME); // after 5 hour it will delete the data
