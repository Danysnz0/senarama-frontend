import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  try {
    const payload = jwtDecode(localStorage.getItem('token' || ''));
    return payload;
  } catch (error) {
    return false;
  }
};

export default decodeToken;
