import axios from 'axios';

const createUser = async (user) => {
  try {
    const URL = 'https://register-users-production.up.railway.app/';
    const response = await axios.post(URL, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default createUser;