import jwt_decode from 'jwt-decode';

export const checkStorage = () => {
  return localStorage.getItem('currentUser');
};
export const getInfo = () => {
    return jwt_decode(localStorage.getItem('currentUser')) ;
  };
export const getId = ()=>{
  if(getInfo){
    return   getInfo().data._id
 }
}