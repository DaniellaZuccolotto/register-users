import axios from 'axios';

const getUsers = async () => {
  try {
    const URL = 'https://register-users-production.up.railway.app/';
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getUsers;