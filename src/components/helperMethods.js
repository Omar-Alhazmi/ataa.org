import jwt_decode from 'jwt-decode';

export const getInfo = () => {
    return jwt_decode(localStorage.getItem('currentUser')) ;
  };