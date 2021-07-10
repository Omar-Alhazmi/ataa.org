import jwt_decode from 'jwt-decode';

export const checkStorage = () => {
  return localStorage.getItem('currentUser');
};
export const getInfo = () => {
    return jwt_decode(localStorage.getItem('currentUser')) ;
  };
